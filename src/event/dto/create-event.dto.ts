export class CreateEventDto {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_type_id: number;
  parent_event_type_id: number;
  human_category_id: number;
  venue_id: number;
  lang_id: number;
  release_date: string;
}
