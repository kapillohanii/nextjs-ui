import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiSearch className="h-6 w-6 text-gray-400" />
            </div>
            <input
                type="text"
                className="w-full pl-10 pr-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                placeholder="Search"
            />
        </div>
    );
};

export default SearchInput;

