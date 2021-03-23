export interface SwiperProps {
  showsButtons?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  horizontal?: boolean;
  index?: number;
  showsPagination?: boolean;
}

export interface SwiperListProps {
  data: any[];
  index?: number;
  showsPagination?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  autoplayLoop?: boolean;
}
