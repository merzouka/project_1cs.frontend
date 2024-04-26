module.exports = {

"[project]/src/app/(inscription)/components/Store.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "useInscriptionStore": ()=>useInscriptionStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/zustand/esm/index.mjs [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useInscriptionStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["create"]((set)=>({
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
const useStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["create"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"]((set)=>({
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
"[project]/src/app/(inscription)/components/InscriptionPage1.tsx [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/src/app/(inscription)/components/InscriptionPage1.tsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/src/app/(inscription)/inscription/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_app_(inscription)_f89037._.js.map