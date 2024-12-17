"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { animate, DOMKeyframesDefinition, DynamicAnimationOptions } from "framer-motion"
import _ from "lodash"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { TransitionRouter } from "next-transition-router"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { NextUIProvider } from "@nextui-org/react"

import { MediaContextProvider } from "@/components/media"

export interface ProvidersProps {
    children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
    const router = useRouter()

    return (
        <MediaContextProvider>
            <NextUIProvider navigate={router.push} locale='zh-CN'>
                <NextThemesProvider attribute='class' defaultTheme='system' enableSystem={true}>
                    <NuqsAdapter>{children}</NuqsAdapter>
                </NextThemesProvider>
            </NextUIProvider>
        </MediaContextProvider>
    )
}

interface PageTransitionProps {
    children: React.ReactNode
    className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
    const wrapperRef = React.useRef<HTMLDivElement>(null!)
    const transition: DynamicAnimationOptions = { ease: "easeInOut", duration: 0.5 }
    const enterKeyframes: DOMKeyframesDefinition = React.useMemo(
        () => ({ opacity: [0, 1], x: [20, 0], filter: ["blur(6px)", "blur(0px)"] }),
        []
    )
    const leaveKeyframes: DOMKeyframesDefinition = React.useMemo(
        () =>
            _.mapValues(enterKeyframes, (value: any, key) => {
                if (key === "x") {
                    return _.reverse([...value]).map((v) => (v !== 0 ? -v : 0))
                }
                return _.reverse([...value])
            }),
        [enterKeyframes]
    )

    return (
        <TransitionRouter
            auto
            enter={(next) => {
                animate(wrapperRef.current, enterKeyframes, { ...transition, onComplete: next })
            }}
            leave={(next) => {
                animate(wrapperRef.current, leaveKeyframes, { ...transition, onComplete: next })
            }}
        >
            <main ref={wrapperRef} className={className}>
                {children}
            </main>
        </TransitionRouter>
    )
}
