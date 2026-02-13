module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/vibecoding_project/dump-app/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vibecoding_project/dump-app/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/vibecoding_project/dump-app/src/components/Button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Button = ({ children, className = '', onClick, onMouseEnter, style, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
"[project]/vibecoding_project/dump-app/src/utils/randomPosition.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/src/components/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$utils$2f$randomPosition$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/src/utils/randomPosition.ts [app-rsc] (ecmascript)");
;
;
;
;
const PROPOSAL_TEXT = 'Will you be my Valentine? 💌';
const SUCCESS_TEXT = 'Yaaay 💕 I knew it!';
const ProposalCard = ()=>{
    const [yesScale, setYesScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noBtnPos, setNoBtnPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({
        left: '50%',
        top: '0%'
    });
    const noBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Move No button to random position on hover/click
    const moveNoButton = ()=>{
        if (noBtnRef.current && containerRef.current) {
            const btn = noBtnRef.current;
            const rect = btn.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const { left, top } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$utils$2f$randomPosition$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRandomSafePosition"])(width, height);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (noBtnRef.current) {
                const btn = noBtnRef.current;
                const rect = btn.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;
                const { left, top } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$utils$2f$randomPosition$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRandomSafePosition"])(width, height);
                setNoBtnPos({
                    left: `${left}px`,
                    top: `${top}px`
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "proposal-container relative w-full h-full min-h-screen",
        children: !showSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center fade-scale",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-serif font-bold mb-8 text-center",
                    children: PROPOSAL_TEXT
                }, void 0, false, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center justify-center mt-2",
                    style: {
                        height: 120
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: `bg-soft-pink text-deep-rose shadow-soft hover:bg-blush focus:bg-blush transition-all mb-4`,
                            style: {
                                transform: `scale(${yesScale})`,
                                zIndex: 2
                            },
                            onClick: handleYes,
                            children: "Yes 💖"
                        }, void 0, false, {
                            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 70,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
            lineNumber: 57,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center fade-scale mt-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-soft-pink",
                    children: SUCCESS_TEXT
                }, void 0, false, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-32"
                }, void 0, false, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
            lineNumber: 87,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProposalCard;
}),
"[project]/vibecoding_project/dump-app/src/components/FloatingHearts.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingHearts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const hearts = [
    {
        left: '10%',
        top: '20%',
        delay: '0s',
        size: 'w-6 h-6'
    },
    {
        left: '80%',
        top: '30%',
        delay: '1s',
        size: 'w-8 h-8'
    },
    {
        left: '50%',
        top: '10%',
        delay: '2s',
        size: 'w-5 h-5'
    },
    {
        left: '30%',
        top: '70%',
        delay: '1.5s',
        size: 'w-7 h-7'
    },
    {
        left: '70%',
        top: '80%',
        delay: '2.5s',
        size: 'w-6 h-6'
    }
];
function FloatingHearts() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none",
        children: hearts.map((heart, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute ${heart.size} animate-floating-heart`,
                style: {
                    left: heart.left,
                    top: heart.top,
                    animationDelay: heart.delay,
                    opacity: 0.18
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "#FADADD",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    }, void 0, false, {
                        fileName: "[project]/vibecoding_project/dump-app/src/components/FloatingHearts.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vibecoding_project/dump-app/src/components/FloatingHearts.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, idx, false, {
                fileName: "[project]/vibecoding_project/dump-app/src/components/FloatingHearts.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/vibecoding_project/dump-app/src/components/FloatingHearts.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/vibecoding_project/dump-app/src/components/ProposalPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProposalPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$ProposalCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$FloatingHearts$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/src/components/FloatingHearts.tsx [app-rsc] (ecmascript)");
;
;
;
function ProposalPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center justify-center min-h-screen bg-warm-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$FloatingHearts$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalPage.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$ProposalCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalPage.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalPage.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/vibecoding_project/dump-app/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$ProposalPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/src/components/ProposalPage.tsx [app-rsc] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$ProposalPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/vibecoding_project/dump-app/app/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/vibecoding_project/dump-app/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vibecoding_project/dump-app/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ae3413a9._.js.map