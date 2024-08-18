import { Fragment, useState, useEffect } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    PopoverGroup,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from '@headlessui/react';
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navigation = {
    pages: [
        { name: 'Home', href: '/home' },
        { name: 'Products', href: '/products' },
        { name: 'Join Us', href: '/join-us' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'About Us', href: '/about-us' }
    ],
};

export default function Navbar(props) {
    const [open, setOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchActive, setSearchActive] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    let offer = 10000;

    useEffect(() => {
        const userName = props.loggedUser?.name?.split(' ')[0] || '';
        if (props.loggedUser && props.isUserLogged) {
            localStorage.setItem('user', JSON.stringify(props.loggedUser));
            setUserName(userName);
            setIsSignedIn(true);
        }
    }, [props.loggedUser, props.isUserLogged]);

    useEffect(() => {
        console.log("Current location:", location.pathname);
    }, [location.pathname]);

    const closeSidebar = () => setOpen(false);

    const handleSignOut = () => {
        localStorage.removeItem('user');
        setIsSignedIn(false);
        setUserName('');
        props.setUserLoggedOut(true);
        navigate('/sign-in');
    };

    const handleSearchChange = (e) => {
        console.log("Search query:", e.target.value);
        setSearchQuery(e.target.value);
        setSearchActive(e.target.value.length > 0);
    };

    const handleSearchSubmit = () => {
        console.log("Search submit:", searchQuery);
        if (searchQuery) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    const isProductPage = location.pathname === '/products';

    return (
        <div className="bg-white">
            <Dialog open={open} onClose={closeSidebar} className="relative z-40 lg:hidden">
                <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear" />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out">
                        <div className="flex px-4 pb-2 pt-5">
                            <button type="button" onClick={closeSidebar} className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <TabGroup selectedIndex={selectedTab} onChange={index => setSelectedTab(index)}>
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    <Tab key="Products" className={`flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium transition-colors duration-200 ease-out ${selectedTab === 0 ? 'text-gray-900' : 'text-gray-900'}`}>
                                        Products
                                    </Tab>
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                <TabPanel key="Products" className="space-y-10 px-4 pb-8 pt-10">

                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <Link to={page.href} onClick={closeSidebar} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {isSignedIn ? (
                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                <div className="flow-root">
                                    <p className="-m-2 block p-2 font-medium text-gray-900">
                                        Welcome, {userName}!
                                    </p>
                                </div>
                                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                <div className="flow-root">
                                    <button onClick={handleSignOut} className="-m-2 block p-2 font-medium text-gray-900">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                <div className="flow-root">
                                    <Link to="sign-in" onClick={closeSidebar} className="-m-2 block p-2 font-medium text-gray-900">
                                        Sign in
                                    </Link>
                                </div>
                                <div className="flow-root">
                                    <Link to="/create-account" onClick={closeSidebar} className="-m-2 block p-2 font-medium text-gray-900">
                                        Create account
                                    </Link>
                                </div>
                            </div>
                        )}
                    </DialogPanel>
                </div>
            </Dialog>
            <header className="relative bg-white">
                <div>
                    <p className="flex items-center justify-center bg-black px-4 text-xs text-white sm:px-6 lg:px-6 text-center md:text-sm">
                        Shop to save Turtles! All profits support turtle conservation efforts. Free shipping on orders over {offer} LKR!
                    </p>
                </div>
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center justify-between">
                            <button type="button" onClick={() => setOpen(true)} className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/">
                                    <img alt="" src={require('../../images/Shellzee.png')} className="h-20 w-auto" />
                                </Link>
                            </div>
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    <Link key="Home" to="/home" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Home
                                    </Link>
                                    <Link key="Products" to="/products" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Products
                                    </Link>
                                    {navigation.pages.slice(2).map((page) => (
                                        <Link key={page.name} to={page.href} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverGroup>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {isSignedIn ? (
                                        <>
                                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user avatar" />
                                            <p className="inline-block text-sm font-medium text-gray-700">
                                                Welcome, {userName}!
                                            </p>
                                            <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                            <Link to="/sign-in" onClick={handleSignOut} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Logout
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/sign-in" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Sign in
                                            </Link>
                                            <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                            <Link to="/create-account" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Create account
                                            </Link>
                                        </>
                                    )}
                                </div>
                                <div className="hidden lg:ml-8 lg:flex">
                                    {isSignedIn && isProductPage && (
                                        <>
                                            <div className="relative flex items-center">
                                                <input
                                                    id="search"
                                                    type="text"
                                                    className={`ml-3 block w-60 min-w-0 rounded-full border border-gray-400 px-4 py-1.5 text-gray-700 focus:border-black focus:outline-none focus:ring-black sm:text-sm transition duration-200 ease-in-out ${searchActive ? 'ring-1 ring-black' : ''}`}
                                                    placeholder="Search for products"
                                                    value={searchQuery}
                                                    onChange={handleSearchChange}
                                                />
                                                <button
                                                    type="button"
                                                    className="ml-3 p-1 text-gray-400 hover:text-gray-500"
                                                    onClick={handleSearchSubmit}
                                                >
                                                    <span className="sr-only">Search</span>
                                                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                                </button>
                                            </div>
                                            <div className="ml-4 flow-root lg:ml-6">
                                                <Link to="/cart" className="group -m-2 flex items-center p-2">
                                                    <ShoppingBagIcon
                                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
