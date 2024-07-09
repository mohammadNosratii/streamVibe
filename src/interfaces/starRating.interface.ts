interface starRatingProps {
  rate: number | undefined;
  onChange?: (value: number | undefined) => void;
  isEditable: boolean;
}

export type { starRatingProps };
