export type ServiceImage = {
src: string;
alt: string;
}

export type ServiceContentData = {
title: string;
description: string;
tags: string[];
}

export type ServiceItem = {
    id: number;
    image: ServiceImage;
    content: ServiceContentData;
}