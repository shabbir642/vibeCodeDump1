module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/vibecoding_project/dump-app/src/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Button = ({ children, className = '', onClick, onMouseEnter, style, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `rounded-lg px-6 py-3 font-semibold shadow-md transition-all duration-300 ease-in-out focus:outline-none ${className}`,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        style: style,
        disabled: disabled,
        children: children
    }, void 0, false, {
        fileName: "[project]/vibecoding_project/dump-app/src/components/Button.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = Button;
}),
"[project]/vibecoding_project/dump-app/src/utils/randomPosition.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utility to get a random safe position for an element within the viewport
__turbopack_context__.s([
    "getRandomSafePosition",
    ()=>getRandomSafePosition
]);
function getRandomSafePosition(elementWidth, elementHeight) {
    const padding = 16 // Prevent button from touching edges
    ;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxLeft = viewportWidth - elementWidth - padding;
    const maxTop = viewportHeight - elementHeight - padding;
    const left = Math.random() * maxLeft + padding;
    const top = Math.random() * maxTop + padding;
    return {
        left,
        top
    };
}
}),
"[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$utils$2f$randomPosition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/src/utils/randomPosition.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const PROPOSAL_TEXT = 'Will you be my Valentine? 💌';
const SUCCESS_TEXT = 'Yaaay 💕 I knew it!';
const ProposalCard = ()=>{
    const [yesScale, setYesScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noBtnPos, setNoBtnPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: '50%',
        top: '0%'
    });
    const noBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Move No button to random position on hover/click
    const moveNoButton = ()=>{
        if (noBtnRef.current && containerRef.current) {
            const btn = noBtnRef.current;
            const rect = btn.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const { left, top } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$utils$2f$randomPosition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomSafePosition"])(width, height);
            setNoBtnPos({
                left: `${left}px`,
                top: `${top}px`
            });
            setYesScale((prev)=>Math.min(prev + 0.1, 1.3)); // Incremental scale, max 1.3
        }
    };
    // Fade out proposal and show success message
    const handleYes = ()=>{
        setShowSuccess(true);
        setTimeout(()=>{
        // Optionally trigger celebration animation here
        }, 800);
    };
    // Responsive: reset No button position on resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (noBtnRef.current) {
                const btn = noBtnRef.current;
                const rect = btn.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;
                const { left, top } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$utils$2f$randomPosition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRandomSafePosition"])(width, height);
                setNoBtnPos({
                    left: `${left}px`,
                    top: `${top}px`
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "proposal-container relative w-full h-full min-h-screen",
        children: !showSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center fade-scale",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-serif font-bold mb-8 text-center",
                    children: PROPOSAL_TEXT
                }, void 0, false, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center justify-center mt-2",
                    style: {
                        height: 120
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: `bg-soft-pink text-deep-rose shadow-soft hover:bg-blush focus:bg-blush transition-all mb-4`,
                            style: {
                                transform: `scale(${yesScale})`,
                                zIndex: 2
                            },
                            onClick: handleYes,
                            children: "Yes 💖"
                        }, void 0, false, {
                            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            ref: noBtnRef,
                            className: "bg-blush text-deep-rose shadow-soft hover:bg-soft-pink focus:bg-soft-pink transition-all absolute",
                            style: {
                                left: noBtnPos.left,
                                top: noBtnPos.top,
                                zIndex: 3,
                                transition: 'left 0.5s ease, top 0.5s ease, transform 0.3s'
                            },
                            onMouseEnter: moveNoButton,
                            onTouchStart: moveNoButton,
                            onClick: moveNoButton,
                            children: "No 🙈"
                        }, void 0, false, {
                            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center fade-scale mt-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-soft-pink",
                    children: SUCCESS_TEXT
                }, void 0, false, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-32"
                }, void 0, false, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
            lineNumber: 89,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProposalCard;
}),
"[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2c6f11e8._.js.map