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
var __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibecoding_project/dump-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ children, className = '', variant = 'primary', onClick, onMouseEnter, onTouchStart, style, disabled }, ref)=>{
    const baseClasses = 'rounded-2xl px-8 py-4 font-bold text-lg shadow-2xl transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = {
        primary: 'bg-gradient-to-r from-rose-accent to-deep-rose text-white hover:from-deep-rose hover:to-rose-accent hover:shadow-2xl hover:shadow-rose-accent/30 hover:-translate-y-2 focus:ring-rose-accent/50',
        secondary: 'bg-white text-deep-rose border-2 border-blush hover:bg-blush hover:border-soft-pink hover:shadow-2xl hover:shadow-blush/40 hover:-translate-y-2 focus:ring-blush/50'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: `${baseClasses} ${variantClasses[variant]} ${className}`,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onTouchStart: onTouchStart,
        style: style,
        disabled: disabled,
        children: children
    }, void 0, false, {
        fileName: "[project]/vibecoding_project/dump-app/src/components/Button.tsx",
        lineNumber: 39,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
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
'use client';
;
;
;
const PROPOSAL_TEXT = 'Will you be my Valentine? 💌';
const SUCCESS_TEXT = 'Yaaay 💕 I knew it!';
const ProposalCard = ()=>{
    const [yesScale, setYesScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noBtnPos, setNoBtnPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: '25%',
        top: '70%'
    });
    const [hoverCount, setHoverCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const noBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Move No button to random position on hover/click
    const moveNoButton = ()=>{
        setHoverCount((prev)=>prev + 1);
        // Generate random percentage positions within the card container
        const leftPercent = Math.random() * 60 + 20 // 20% to 80% within card
        ;
        const topPercent = Math.random() * 40 + 40 // 40% to 80% within card (below header)
        ;
        setNoBtnPos({
            left: `${leftPercent}%`,
            top: `${topPercent}%`
        });
        // Make YES button grow more gradually for smoother effect
        const scaleIncrement = 0.2 + hoverCount * 0.08 // Smaller, smoother increments
        ;
        setYesScale((prev)=>Math.min(prev + scaleIncrement, 2.5)); // Reduced max scale
    };
    // Fade out proposal and show success message
    const handleYes = ()=>{
        setShowSuccess(true);
        setTimeout(()=>{
        // Optionally trigger celebration animation here
        }, 800);
    };
    // Reset positions on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // Initial positioning is handled by state initialization
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-warm-white to-soft-pink/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-soft-pink/30 p-8 md:p-12 max-w-4xl w-full min-h-[600px] overflow-hidden",
            children: !showSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full fade-scale",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-deep-rose leading-tight",
                            children: PROPOSAL_TEXT
                        }, void 0, false, {
                            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex justify-between items-center gap-8 px-8 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "secondary",
                                className: "transition-all duration-700 ease-out",
                                style: {
                                    position: hoverCount > 0 ? 'absolute' : 'static',
                                    left: hoverCount > 0 ? noBtnPos.left : 'auto',
                                    top: hoverCount > 0 ? noBtnPos.top : 'auto',
                                    zIndex: 3,
                                    transform: hoverCount > 0 ? 'translate(-50%, -50%)' : 'none',
                                    transition: hoverCount > 0 ? 'left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'all 0.3s ease'
                                },
                                ref: noBtnRef,
                                onMouseEnter: moveNoButton,
                                onTouchStart: moveNoButton,
                                onClick: moveNoButton,
                                children: "No 🙈"
                            }, void 0, false, {
                                fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "primary",
                                className: "transition-all duration-500 ease-out",
                                style: {
                                    transform: `scale(${yesScale})`,
                                    zIndex: yesScale > 2 ? 10 : 2,
                                    transformOrigin: 'center center'
                                },
                                onClick: handleYes,
                                children: "Yes 💖"
                            }, void 0, false, {
                                fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl opacity-30",
                                    children: "💕"
                                }, void 0, false, {
                                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl opacity-50",
                                    children: "💖"
                                }, void 0, false, {
                                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl opacity-30",
                                    children: "💕"
                                }, void 0, false, {
                                    fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-full fade-scale",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-deep-rose",
                        children: SUCCESS_TEXT
                    }, void 0, false, {
                        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-32 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibecoding_project$2f$dump$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl animate-bounce",
                            children: "🎉💖🎉"
                        }, void 0, false, {
                            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                            lineNumber: 111,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
                lineNumber: 105,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vibecoding_project/dump-app/src/components/ProposalCard.tsx",
        lineNumber: 46,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__644b77b1._.js.map