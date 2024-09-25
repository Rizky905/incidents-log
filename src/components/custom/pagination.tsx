import { Button } from "../ui/button";

interface PaginationProps {
  page: number;
  limit: number;
  count: number;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Pagination({
  page,
  limit,
  count,
  onNext,
  onPrevious,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={onPrevious}
        disabled={page <= 1}
        className="select-none"
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        disabled={page >= Math.ceil(count / limit)}
        className="select-none"
      >
        Next
      </Button>
    </div>
  );
}
