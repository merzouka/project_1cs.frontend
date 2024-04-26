(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_(inscription)_4d15cb._.js", {

"[project]/src/app/(inscription)/components/Store.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "useInscriptionStore": ()=>useInscriptionStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useInscriptionStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["create"]((set)=>({
        setField: (field, value)=>set((state)=>({
                    form: {
                        ...state.form,
                        [field]: value
                    }
                })),
        form: {
            nom: '',
            prenom: '',
            nomArabe: '',
            prenomArabe: '',
            prenomPere: '',
            prenomMere: '',
            sexe: '',
            dateNaissance: '',
            nationalite: '',
            paysResidence: '',
            nin: '',
            dateExpirationNin: '',
            // Page 2 fields
            numeroPortable: '',
            email: '',
            wilaya: '',
            commune: '',
            numeroPassport: '',
            dateExpirationPassport: '',
            photoPersonnelle: null,
            // Page 3 fields (for sexe === 'femme')
            numeroPortableMahram: '',
            emailMahram: '',
            wilayaMahram: '',
            prenomArabeMahram: '',
            numeroPassportMahram: '',
            dateExpirationPassportMahram: '',
            idMahram: '',
            photoPersonnelleMahram: null
        }
    }));
const useStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["create"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"]((set)=>({
        // Page 1 fields
        nom: '',
        prenom: '',
        nomArabe: '',
        prenomArabe: '',
        prenomPere: '',
        prenomMere: '',
        sexe: '',
        dateNaissance: '',
        nationalite: '',
        paysResidence: '',
        nin: '',
        dateExpirationNin: '',
        // Page 2 fields
        numeroPortable: '',
        email: '',
        wilaya: '',
        commune: '',
        numeroPassport: '',
        dateExpirationPassport: '',
        photoPersonnelle: null,
        // Page 3 fields (for sexe === 'femme')
        numeroPortableMahram: '',
        emailMahram: '',
        wilayaMahram: '',
        prenomArabeMahram: '',
        numeroPassportMahram: '',
        dateExpirationPassportMahram: '',
        idMahram: '',
        photoPersonnelleMahram: null,
        // Actions
        setField: (field, value)=>set({
                [field]: value
            }),
        clearStore: ()=>set({}, true)
    }), {
    name: 'inscription-form-storage'
}));
const __TURBOPACK__default__export__ = useStore;

})()),
"[project]/src/app/(inscription)/components/Formm.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(inscription)/components/Store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const InscriptionPage1 = ()=>{
    _s();
    const { nom, prenom, nomArabe, prenomArabe, prenomPere, prenomMere, sexe, dateNaissance, nationalite, paysResidence, nin, dateExpirationNin } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]((state)=>state.form);
    const setField = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]((state)=>state.setField);
    // : { nom, prenom, nomArabe, prenomArabe, prenomPere, prenomMere, sexe, dateNaissance, nationalite, paysResidence, nin, dateExpirationNin, setField
    const handleInputChange = (e)=>{
        setField(e.target.name, e.target.value);
    };
    /*
    const [queryEnabled, setQueryEnabled] = useState(true);
    
    const { data } = useQuery({
        queryKey: ['inscription', 'getinfo'],
        queryFn: async () => {
            setQueryEnabled(false)
            try {
                const response = await axios.get('http://localhost:8000/registration')
                setField('email', (response).data.emailUtilisateur)
                setField('nom', (response).data.first_name)
                setField('prenom', (response).data.last_name)
                setField('dateNaissance', (response).data.dateOfBirth)
                setField('wilaya', (response).data.province)
                setField('sexe', (response).data.gender)
                setField('commune', (response).data.city)
                return response.data

            } catch (e) {
                console.log(e)
                throw new Error("error")
            }
        },
        enabled: queryEnabled
    }) */ console.log('ldsjfqsdkfs');
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(sexe);
        if (sexe == 'FM') {
            router.push("/inscription/mahrampage");
            return;
        }
        router.push("/inscription/Secpage");
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center space-x-[400px] mr-[260px]",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "nom",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "Nom"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        className: " py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565] bg-grey",
                                        type: "text",
                                        name: "nom",
                                        value: nom,
                                        onChange: handleInputChange,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 68,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "prénom",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "prénom"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "text",
                                        name: "prenom",
                                        value: prenom,
                                        onChange: handleInputChange,
                                        className: " py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        id: "prénom",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "arabic-only flex justify-center space-x-[400px] mr-[260px] ",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "nom_ar",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "Nom(arab)"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        className: "  py-4 arabic-only border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "text",
                                        pattern: "[\\u0600-\\u06FF]+",
                                        name: "nomArabe",
                                        dir: "rtl",
                                        value: nomArabe,
                                        onChange: handleInputChange,
                                        id: "nom_ar",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "prenom_ar",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "Prénom(arab)"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        className: " py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "text",
                                        name: "prenomArabe",
                                        dir: "rtl",
                                        lang: "ar",
                                        value: prenomArabe,
                                        onChange: handleInputChange,
                                        id: "prenom_ar",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 82,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center space-x-[400px] mr-[260px] ",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "father_name",
                                        className: "mb-1.5 block w-40 text-sm",
                                        children: "Prénom du père"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 91,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        className: " py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "text",
                                        name: "prenomPere",
                                        value: prenomPere,
                                        onChange: handleInputChange,
                                        id: "father_name",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 92,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "mother_name",
                                        className: "mb-1.5 block w-40  text-sm",
                                        children: "Prénom de la mère"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 95,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        className: "py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "text",
                                        name: "prenomMere",
                                        value: prenomMere,
                                        onChange: handleInputChange,
                                        id: "mother_name",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 94,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center space-x-[400px] mr-[260px]",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "sexe",
                                        className: "block text-left w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white",
                                        children: "Sexe"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                        id: "sexe",
                                        name: "sexe",
                                        value: sexe,
                                        onChange: handleInputChange,
                                        className: "h-9 w-[340px] shadow-md rounded-lg border  text-left text-slate-500 focus:outline-[#EBA565]",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                selected: true,
                                                children: "Sélectionnez votre sexe"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                value: "FM",
                                                children: "femme"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                                lineNumber: 106,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                value: "HM",
                                                children: "homme"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                                lineNumber: 107,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10 my-1",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "DN",
                                        className: "mb-1.5 block w-40 text-left text-sm",
                                        children: "Date de nainaissance "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 111,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        id: "DN",
                                        type: "date",
                                        name: "dateNaissance",
                                        value: dateNaissance,
                                        onChange: handleInputChange,
                                        className: "py-4 border-gray-100 shadow-md w-[340px] focus:border-blue h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        placeholder: "Date de nainaissance",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 112,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center space-x-[400px] mr-[260px]",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "nationalite",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "  Nationalité "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "text",
                                        name: "nationalite",
                                        value: nationalite,
                                        onChange: handleInputChange,
                                        className: "py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        placeholder: "",
                                        id: "nationalite",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 119,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "paye",
                                        className: "mb-1.5 block text-left text-sm w-40",
                                        children: "  Pays de résidence  "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 124,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "text",
                                        name: "paysResidence",
                                        value: paysResidence,
                                        onChange: handleInputChange,
                                        className: "py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        placeholder: "",
                                        id: "paye",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                        lineNumber: 118,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center space-x-[400px] mr-[260px] mb-4",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "nin",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "NIN"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "nin",
                                        value: nin,
                                        onChange: handleInputChange,
                                        className: "py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "number",
                                        placeholder: "",
                                        id: "nin",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 133,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "DE",
                                        className: "mb-1.5 block text-left text-sm w-40",
                                        children: "  Date d’expiration "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 136,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "dateExpirationNin",
                                        value: dateExpirationNin,
                                        onChange: handleInputChange,
                                        className: "py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "date",
                                        placeholder: "Date d’expiration",
                                        id: "DE",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center ",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            className: "border-orange-400 shadow-md h-15 mb-10 block w-[340px] rounded-lg border px-4 py-2 text-center font-bold text-black",
                            children: "Confirmer"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                            lineNumber: 145,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                        lineNumber: 143,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
                lineNumber: 63,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/app/(inscription)/components/Formm.tsx>",
            lineNumber: 62,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
_s(InscriptionPage1, "Cn/59YmmfzjMADVc+IH1ZggELuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = InscriptionPage1;
const __TURBOPACK__default__export__ = InscriptionPage1;
var _c;
__turbopack_refresh__.register(_c, "InscriptionPage1");

})()),
"[project]/src/app/(inscription)/inscription/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_app_(inscription)_4d15cb._.js.map