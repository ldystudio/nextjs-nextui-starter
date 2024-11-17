import React from "react"

import { isNumber } from "lodash"

import { cn, memoize } from "~/utils"

export interface DimensionProps {
    children: React.ReactNode
    reverse?: boolean
    fullWidth?: boolean
    fullHeight?: boolean
    align?: "start" | "end" | "center" | "baseline" | "stretch"
    justify?: "start" | "end" | "center" | "between" | "around" | "evenly"
    space?: number
    className?: string
}

interface GenerateStylesParams extends Omit<DimensionProps, "children" | "reverse"> {
    direction: "row" | "row-reverse" | "column" | "column-reverse"
}

const generateStyles = memoize((params: GenerateStylesParams) => {
    const { direction, fullWidth, fullHeight, align, justify, space, className } = params
    let alignItems, justifyContent, gap

    if (!className?.includes("items-")) {
        switch (align) {
            case "start":
                alignItems = "flex-start"
                break
            case "end":
                alignItems = "flex-end"
                break
            default:
                alignItems = align || "center"
                break
        }
    }

    if (!className?.includes("justify-")) {
        switch (justify) {
            case "start":
                justifyContent = "flex-start"
                break
            case "end":
                justifyContent = "flex-end"
                break
            case "between":
                justifyContent = "space-between"
                break
            case "around":
                justifyContent = "space-around"
                break
            case "evenly":
                justifyContent = "space-evenly"
                break
            default:
                justifyContent = justify || "flex-start"
                break
        }
    }

    if (!className?.includes("gap-")) {
        gap = isNumber(space) ? `${space * 0.25}rem` : "0.5rem"
    }

    const styles: React.CSSProperties = {
        display: "flex",
        flexDirection: direction,
        alignItems,
        justifyContent,
        gap
    }

    const classNames = cn(fullWidth && "w-full", fullHeight && "h-full", className)

    return { styles, classNames }
})

export const Row: React.FC<DimensionProps> = React.memo(
    ({ children, reverse, fullWidth, fullHeight, align, justify, space, className }) => {
        const direction = reverse ? "row-reverse" : "row"
        const { styles, classNames } = generateStyles({
            direction,
            fullWidth,
            fullHeight,
            align,
            justify,
            space,
            className
        })

        return (
            <div style={styles} className={classNames} suppressHydrationWarning>
                {children}
            </div>
        )
    }
)

export const Col: React.FC<DimensionProps> = React.memo(
    ({ children, reverse, fullWidth, fullHeight, align, justify, space, className }) => {
        const direction = reverse ? "column-reverse" : "column"
        const { styles, classNames } = generateStyles({
            direction,
            fullWidth,
            fullHeight,
            align,
            justify,
            space,
            className
        })

        return (
            <div style={styles} className={classNames} suppressHydrationWarning>
                {children}
            </div>
        )
    }
)
