export interface TicketsPurchaseViewProps {
  data: TicketsPurchaseViewData;

}

export interface TicketsPurchaseViewData {
  event_name: string;
  event_theme_line: string;
  date: string;
  time: string;
  place: string;
  city: string;
  cover_img: string;
  tickets: TicketModel[];
  onClose: () => void;

}
