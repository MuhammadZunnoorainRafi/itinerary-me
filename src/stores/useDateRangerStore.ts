import { create } from 'zustand';

interface DateRangeState {
  startDate: string | null;
  endDate: string | null;
  setDateRange: (range: { startDate: string; endDate: string }) => void;
}

const useDatesRangesPicker = create<DateRangeState>((set) => ({
  startDate: null,
  endDate: null,
  setDateRange: ({ startDate, endDate }) => set({
    startDate,
    endDate
  }),
}));

export default useDatesRangesPicker;
