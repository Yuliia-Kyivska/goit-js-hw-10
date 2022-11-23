!function(t="Ukraine"){fetch(`https://restcountries.com/v3.1/name/${t}?fields=name.official,capital,population,flags,languages`).then((t=>{if(!t)throw new Error(t.statusTexr);return t.json()})).catch((t=>"Oops, there is no country with that name"))}();
//# sourceMappingURL=index.5068b903.js.map
