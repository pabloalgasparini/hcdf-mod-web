export const filteredFiles = (isSearching, docus, docusSearch) => {
    return docus.filter(file =>
        isSearching ? file.nombres.toLowerCase().includes(docusSearch.toLowerCase()) : true
    );
};
