"use client"

import { createMedia } from "@artsy/fresnel"

const AppMedia = createMedia({
    breakpoints: {
        sm: 0,
        md: 769,
        lg: 1025,
        xl: 1280
    },
    interactions: {
        // hover: "(hover: hover)",
        // notHover: "(hover: none)",
        landscape: "not all and (orientation: landscape)",
        portrait: "not all and (orientation: portrait)"
    }
})

export const mediaStyles = AppMedia.createMediaStyle()

// 支持SSR的媒体查询
export const { Media, MediaContextProvider } = AppMedia
