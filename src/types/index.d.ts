import React from 'react';

export type DirectionType = "up" | "down" | "left" | "right";

export interface UseFadeInOptionsType {
	direction: DirectionType;
	duration: number;
	delay?: number;
}

export interface UseFadeInReturnType {
	ref: React.MutableRefObject<HTMLElement> | any;
	style: { opacity: string; transform: string };
}