import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PageProps {
  paramName?: string;
  pageSize: number;
}

export function usePagination({ paramName, pageSize }: PageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearchParamName = paramName || "page";
  const currentPage = Number(searchParams.get(urlSearchParamName)) || 1;
  return {
    currentPage,
    limitOffset: { limit: pageSize, offset: (currentPage - 1) * pageSize },
    gotoPage(page: number) {
      const params = new URLSearchParams(searchParams);
      params.set(urlSearchParamName, page.toString());
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
  };
}
