import { useState } from "react";

export function useRegionSelect(defaultProvince?: number) {
    const [province, setProvince] = useState<number | undefined>(defaultProvince);

    function handleProvinceChange(handler: (value: string) => void) {
        return (value: string) => {
            setProvince(Number(value));
            handler(value);
        }
    }

    function handleCityChange(handler: (value: string) => void) {
        return (value: string) => {
            handler(value);
        }
    }

    return {
        handleCityChange,
        handleProvinceChange,
        province,
    }
}
