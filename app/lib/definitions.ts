import { Erica_One } from "next/font/google";

export type YearDescription = {
    year_range: string;
    description: string;
    
}
export type CaptionedImage = {
    image: HTMLImageElement;
    caption: string;
    
}

export type TimelineEvent = {
    title: string;
    id: number;
    start_time: number;
    end_time: number;
    year_description: YearDescription;
    text: string; //might want to be html
    images: CaptionedImage[];
    element_style: 'Info' | 'Bio' | 'Era';
}