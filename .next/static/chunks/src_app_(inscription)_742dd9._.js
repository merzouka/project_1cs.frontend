(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_(inscription)_742dd9._.js", {

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
"[project]/src/app/(inscription)/api.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// api.js
__turbopack_esm__({
    "submitInscriptionData": ()=>submitInscriptionData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const API_BASE_URL = 'http://localhost:8000'; // Replace with your backend API URL
const submitInscriptionData = async (data)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/registration`, {
            first_name: data.nom,
            last_name: data.prenom,
            first_name_arabic: data.nomArabe,
            last_name_arabic: data.prenomArabe,
            father_name: data.prenomPere,
            mother_name: data.prenomMere,
            sexe: data.sexe,
            dateOfBirth: data.dateNaissance,
            nationality: data.nationalite,
            paysResidence: data.paysResidence,
            NIN: data.nin,
            dateExpirationNin: data.dateExpirationNin,
            // Page 2 fields
            numeroPortable: data.numeroPortable,
            emailUtilisateur: data.email,
            province: data.wilaya,
            city: data.commun,
            passport_id: data.numeroPassport,
            passport_expiration_date: data.dateExpirationPassport,
            personal_picture: data.photoPersonnelle,
            // Page 3 fields (for sexe === 'femme')
            phone_number: data.numeroPortableMahram,
            email: data.emailMahram,
            province: data.wilayaMahram,
            city: data.commune,
            passport_id: data.umeroPassportMahram,
            passport_expiration_date: data.dateExpirationPassportMahram,
            maahram_id: data.idMahram,
            personal_picture: data.photoPersonnelleMahram
        });
        return response.data;
    } catch (error) {
        console.error('Error submitting inscription data:', error);
        throw error;
    }
};

})()),
"[project]/src/app/(inscription)/components/Mahramform.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// pages/inscription/page3.jsx
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(inscription)/components/Store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(inscription)/api.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const InscriptionPage3 = ()=>{
    _s();
    const { numeroPortableMahram, emailMahram, wilayaMahram, commune, numeroPassportMahram, dateExpirationPassportMahram, idMahram, photoPersonnelleMahram } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]();
    const setField = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]((state)=>state.setField);
    const handleInputChange = (e)=>{
        setField(e.target.name, e.target.value);
    };
    const handlePhotoChange = (e)=>{
        setField('photoPersonnelleMahram', e.target.files[0]);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('heelo');
        try {
            const formData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]((state)=>state.form);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitInscriptionData"](formData);
            console.log('Inscription data submitted successfully');
            console.log('nom');
            console.log('prenom');
            console.log('nomArabe');
            console.log('prenomArabe');
            console.log('prenomPere');
            console.log('numeroPortableMahram');
            console.log('photoPersonnelleMahram');
            console.log('nom');
            console.log('nom');
        } catch (error) {
            console.error('Error submitting inscription data:', error);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                className: "mb-1",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center space-x-[400px] mr-[260px]",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "number",
                                        className: "mb-1.5 block  w-40 text-sm text-left",
                                        children: "  Numéro de portable"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "numeroPortableMahram",
                                        value: numeroPortableMahram,
                                        onChange: handleInputChange,
                                        className: " py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565] bg-grey",
                                        type: "tel",
                                        pattern: "[0-9]{3}[0-9]{3}[0-9]{4}",
                                        "aria-describedby": "helper-text-explanation",
                                        placeholder: "",
                                        id: "number",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "email",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "  Email"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "emailMahram",
                                        value: emailMahram,
                                        onChange: handleInputChange,
                                        className: " py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "email",
                                        placeholder: "",
                                        id: "email",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center space-x-[400px] mr-[260px]",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "wilaya",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: " Wilaya "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "wilayaMahram",
                                        value: wilayaMahram,
                                        onChange: handleInputChange,
                                        className: " py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565] bg-grey",
                                        type: "text",
                                        placeholder: "",
                                        id: "Wilaya",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 68,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "commune",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "  commune "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "prenomArabeMahram",
                                        dir: "rtl",
                                        lang: "ar",
                                        value: commune,
                                        onChange: handleInputChange,
                                        className: " py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "text",
                                        placeholder: "",
                                        id: "commune",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center space-x-[400px] mr-[260px] ",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "np",
                                        className: "mb-1.5 block  w-40 text-sm text-left",
                                        children: "  Numéro de passport"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "numeroPassportMahram",
                                        value: numeroPassportMahram,
                                        onChange: handleInputChange,
                                        className: "py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565] mb-1",
                                        type: "number",
                                        placeholder: "",
                                        id: "np",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "DEP",
                                        className: "mb-1.5 block text-left text-sm w-40 mt-[1.8px]",
                                        children: "  Date d’expiration "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "dateExpirationPassportMahram",
                                        value: dateExpirationPassportMahram,
                                        onChange: handleInputChange,
                                        className: "py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "date",
                                        placeholder: "Date d’expiration",
                                        id: "DEP",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: " flex justify-center space-x-[400px] mr-[260px] mb-6",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-5 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "idmahram",
                                        className: "mb-1.5 block  w-40 text-sm text-left",
                                        children: "   ID du mahram "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "idMahram",
                                        value: idMahram,
                                        onChange: handleInputChange,
                                        className: "py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565] mb-1",
                                        type: "number",
                                        placeholder: "",
                                        id: "idmahram",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 89,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "mb-6 w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "picture",
                                        className: "mb-1.5 block text-left w-40 text-sm",
                                        children: "   Photo personnelle "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        onChange: handlePhotoChange,
                                        value: photoPersonnelleMahram,
                                        name: "photoPersonnelleMahram",
                                        className: "text-transparent border-gray-100 text-center shadow-md focus:border-blue w-[154px] h-[40px] rounded-lg border p-1 text-slate-500 focus:outline-[#EBA565]",
                                        type: "file",
                                        placeholder: "",
                                        id: "picture",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 93,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center ",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            className: "border-orange-400 shadow-md h-15 mb-5 block w-[340px] rounded-lg border px-4 py-2 text-center font-bold text-black",
                            children: "Confirmer"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex justify-center ",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/inscription",
                    className: "font-bold",
                    children: "Cliquez pour aller à la page précédente"
                }, void 0, false, {
                    fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                    lineNumber: 105,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                lineNumber: 104,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_s(InscriptionPage3, "XxGqeNbYOS57nQRGSNnZdSahsek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]
    ];
});
_c = InscriptionPage3;
const __TURBOPACK__default__export__ = InscriptionPage3;
var _c;
__turbopack_refresh__.register(_c, "InscriptionPage3");

})()),
"[project]/src/app/(inscription)/inscription/mahrampage/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_app_(inscription)_742dd9._.js.map