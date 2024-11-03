import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface TablePropsTypes {
  createdAt: string | null;
  updatedAt: string | null;
  title: string;
  published: string | boolean;
  thumbnail: string;
  author: string | null;
  id: string | null;
}

export interface POSTSTYPES {
  posts: TablePropsTypes[];
}
