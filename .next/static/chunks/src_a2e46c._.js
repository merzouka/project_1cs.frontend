(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_a2e46c._.js", {

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
"[project]/src/constants/provinces.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "provinces": ()=>provinces
});
const provinces = [
    {
        "number": 1,
        "name": "Adrar"
    },
    {
        "number": 2,
        "name": "Chlef"
    },
    {
        "number": 3,
        "name": "Laghouat"
    },
    {
        "number": 4,
        "name": "Oum El Bouaghi"
    },
    {
        "number": 5,
        "name": "Batna"
    },
    {
        "number": 6,
        "name": "Béjaïa"
    },
    {
        "number": 7,
        "name": "Biskra"
    },
    {
        "number": 8,
        "name": "Béchar"
    },
    {
        "number": 9,
        "name": "Blida"
    },
    {
        "number": 10,
        "name": "Bouira"
    },
    {
        "number": 11,
        "name": "Tamanrasset"
    },
    {
        "number": 12,
        "name": "Tébessa"
    },
    {
        "number": 13,
        "name": "Tlemcen"
    },
    {
        "number": 14,
        "name": "Tiaret"
    },
    {
        "number": 15,
        "name": "Tizi Ouzou"
    },
    {
        "number": 16,
        "name": "Alger"
    },
    {
        "number": 17,
        "name": "Djelfa"
    },
    {
        "number": 18,
        "name": "Jijel"
    },
    {
        "number": 19,
        "name": "Sétif"
    },
    {
        "number": 20,
        "name": "Saïda"
    },
    {
        "number": 21,
        "name": "Skikda"
    },
    {
        "number": 22,
        "name": "Sidi Bel Abbès"
    },
    {
        "number": 23,
        "name": "Annaba"
    },
    {
        "number": 24,
        "name": "Guelma"
    },
    {
        "number": 25,
        "name": "Constantine"
    },
    {
        "number": 26,
        "name": "Médéa"
    },
    {
        "number": 27,
        "name": "Mostaganem"
    },
    {
        "number": 28,
        "name": "M'Sila"
    },
    {
        "number": 29,
        "name": "Mascara"
    },
    {
        "number": 30,
        "name": "Ouargla"
    },
    {
        "number": 31,
        "name": "Oran"
    },
    {
        "number": 32,
        "name": "El Bayadh"
    },
    {
        "number": 33,
        "name": "Illizi"
    },
    {
        "number": 34,
        "name": "Bordj Bou Arreridj"
    },
    {
        "number": 35,
        "name": "Boumerdès"
    },
    {
        "number": 36,
        "name": "El Tarf"
    },
    {
        "number": 37,
        "name": "Tindouf"
    },
    {
        "number": 38,
        "name": "Tissemsilt"
    },
    {
        "number": 39,
        "name": "El Oued"
    },
    {
        "number": 40,
        "name": "Khenchela"
    },
    {
        "number": 41,
        "name": "Souk Ahras"
    },
    {
        "number": 42,
        "name": "Tipaza"
    },
    {
        "number": 43,
        "name": "Mila"
    },
    {
        "number": 44,
        "name": "Aïn Defla"
    },
    {
        "number": 45,
        "name": "Naâma"
    },
    {
        "number": 46,
        "name": "Aïn Témouchent"
    },
    {
        "number": 47,
        "name": "Ghardaïa"
    },
    {
        "number": 48,
        "name": "Relizane"
    },
    {
        "number": 49,
        "name": "Timimoun"
    },
    {
        "number": 50,
        "name": "Bordj Badji Mokhtar"
    },
    {
        "number": 51,
        "name": "Ouled Djellal"
    },
    {
        "number": 52,
        "name": "Béni Abbès"
    },
    {
        "number": 53,
        "name": "In Salah"
    },
    {
        "number": 54,
        "name": "In Guezzam"
    },
    {
        "number": 55,
        "name": "Touggourt"
    },
    {
        "number": 56,
        "name": "Djanet"
    },
    {
        "number": 57,
        "name": "El M'Ghair"
    },
    {
        "number": 58,
        "name": "El Menia"
    }
];

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
    const { numeroPortableMahram, emailMahram, wilayaMahram, prenomArabeMahram, numeroPassportMahram, dateExpirationPassportMahram, idMahram, photoPersonnelleMahram } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]();
    const setField = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]((state)=>state.setField);
    const handleInputChange = (e)=>{
        setField(e.target.name, e.target.value);
    };
    const handlePhotoChange = (e)=>{
        setField('photoPersonnelleMahram', e.target.files[0]);
    };
    const handleSubmit = async ()=>{
        try {
            const formData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$components$2f$Store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInscriptionStore"]((state)=>state.form);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$inscription$292f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitInscriptionData"](formData);
            console.log('Inscription data submitted successfully');
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
                                        lineNumber: 46,
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
                                        lineNumber: 47,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 45,
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
                                        lineNumber: 50,
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
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 44,
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
                                        lineNumber: 56,
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
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-10",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "commune",
                                        className: "mb-1.5 block text-center text-sm",
                                        children: "  Prénom (arabe) "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        name: "prenomArabeMahram",
                                        dir: "rtl",
                                        lang: "ar",
                                        value: prenomArabeMahram,
                                        onChange: handleInputChange,
                                        className: " py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]",
                                        type: "text",
                                        placeholder: "",
                                        id: "commune",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 54,
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
                                        lineNumber: 67,
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
                                        htmlFor: "DEP",
                                        className: "mb-1.5 block text-left text-sm w-40 mt-[1.8px]",
                                        children: "  Date d’expiration "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                        lineNumber: 71,
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
                                        lineNumber: 77,
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
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 76,
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
                                        lineNumber: 81,
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
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 75,
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
                            lineNumber: 87,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex justify-center ",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/inscription/Secpage",
                    className: "font-bold",
                    children: "Cliquez pour aller à la page précédente"
                }, void 0, false, {
                    fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                    lineNumber: 94,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/(inscription)/components/Mahramform.tsx>",
                lineNumber: 93,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_s(InscriptionPage3, "IIaN4EGVdhPVEYDp6P0BYCLLme0=", false, function() {
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

//# sourceMappingURL=src_a2e46c._.js.map