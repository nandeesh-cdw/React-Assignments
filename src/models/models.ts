import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    label: string;
    isUser?: boolean;
    isLottery?: boolean;
}

export interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage: string;
}

export interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode
}

export interface InputProps {
    isLogin?: boolean;
    isLottery?: boolean;
    type: string;
    placeholder?: string;
    onChange?: Function;
    value: string|number;
}

export interface LabelProps{
    label:string
}

export interface LikeProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface PathProps {
    path: string;
    label: string;
}

export interface LotteryFallbackProps {
    errorMessage?: string;
}

export interface MovieCard {
    actors : string[];
    description: string;
    id: number;
    imgUrl: string;
    likes: number;
    name: string;
}

export interface MovieCardProps {
    movie: MovieCard;
    onLiked: Function;
    onMovieClick: Function;
}

export interface MovieDescriptionProps {
    movie: MovieCard;
    isLiked: boolean;
    setLiked: Function;
    onLiked: Function;
    showAd: boolean;
    remainingTime: number;
}

export interface PosterProps {
    isMovieDescription?: boolean;
    isMovieCard?: boolean;
    isLargePromo?: boolean;
    isTrailerCard?: boolean;
    isSmallPromo?: boolean;
    image: string;
    alt: string;
}

export interface Teaser {

}

export interface VideoProps{
    nowShowing?: boolean;
    shortTeasers?: boolean;
    shouldDisplayAd?: Function;
    stopPlaying?: boolean;
    poster: string;
    src: string;
}

export interface AllMovies {
    onLoadMore?: Function;
    
}