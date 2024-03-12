"use client";
import CountrySelect from "./(auth)/components/country-select";

export default function Home() {
    function onChange(value) {
        console.log(value)
    }

    return (
        <div>
            <CountrySelect onChange={onChange} />
        </div>
    );
}
