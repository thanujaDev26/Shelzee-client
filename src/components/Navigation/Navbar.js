import { Fragment, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = {
    categories: [
        {
            id: 'products',
            name: 'Products',
            href: '/products',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: require('../../images/tshirtone.jpeg'),
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: require('../../images/gentsTwo.jpeg'),
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'T shirts', href: '#' },
                        { name: 'Oversize Tees', href: '#' },
                        { name: 'Hoodies', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'Activewear', href: '#' },
                    ],
                },
                {
                    id: 'caps',
                    name: 'Caps',
                    items: [
                        { name: 'Baseball Caps', href: '#' },
                        { name: 'Snapback Hats', href: '#' },
                        { name: 'Dad Hats', href: '#' },
                        { name: 'Bucket Hats', href: '#' },
                        { name: 'Beanies', href: '#' },
                        { name: 'Trucker Hats', href: '#' },
                        { name: 'Flat Caps', href: '#' },
                    ],
                },
                {
                    id: 'others',
                    name: 'Other Accessories',
                    items: [
                        { name: 'Silicon Wristbands', href: '#' },
                        { name: 'Tote Bags', href: '#' },
                        { name: 'Ankle Socks', href: '#' },
                        { name: 'Crew Socks', href: '#' },
                        { name: 'Gift Cards', href: '#' }
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Home', href: '/home' },
        { name: 'Join Us', href: '/join-us' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'About Us', href: '/about-us' }
    ],
}

export default function Example() {
    const [open, setOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState(0);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userName, setUserName] = useState('');

    let offer = 10000;

    const closeSidebar = () => setOpen(false);

    const handleSignOut = () => {
        // Implement sign out logic here
        setIsSignedIn(false);
        setUserName('');
    };

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={open} onClose={closeSidebar} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={closeSidebar}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        <TabGroup selectedIndex={selectedTab} onChange={index => setSelectedTab(index)}>
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation.categories.map((category, index) => (
                                        <Tab
                                            key={category.name}
                                            className={`flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium transition-colors duration-200 ease-out ${selectedTab === index ? 'text-gray-900' : 'text-gray-900'}`}
                                        >
                                            {category.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                {navigation.categories.map((category, index) => (
                                    <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            {category.featured.map((item) => (
                                                <div key={item.name} className="group relative text-sm">
                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                        <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                                                    </div>
                                                    <Link to={item.href} onClick={closeSidebar} className="mt-6 block font-medium text-gray-900">
                                                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                        {item.name}
                                                    </Link>
                                                    <p aria-hidden="true" className="mt-1">
                                                        Shop now
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                    {section.name}
                                                </p>
                                                <ul
                                                    role="list"
                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                    className="mt-6 flex flex-col space-y-6"
                                                >
                                                    {section.items.map((item) => (
                                                        <li key={item.name} className="flow-root">
                                                            <Link to={item.href} onClick={closeSidebar} className="-m-2 block p-2 text-gray-500">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
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
                                        Welcome, {userName}
                                    </p>
                                </div>
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
                        Shop to save Turtles! All profits support turtle conservation efforts. Free shipping on orders
                        over {offer} LKR!
                    </p>
                </div>
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                            </button>

                            <div className="ml-4 mr-auto flex lg:ml-0">
                                <Link to="/">
                                    <img
                                        alt=""
                                        src={require('../../images/Shellzee.png')}
                                        className="h-20 w-auto"
                                    />
                                </Link>
                            </div>
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    <Link
                                        key="Home"
                                        to="/home"
                                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >
                                        Home
                                    </Link>
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            <div className="relative flex">
                                                <PopoverButton
                                                    className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-gray-900"
                                                >
                                                    {category.name}
                                                </PopoverButton>
                                            </div>

                                            <PopoverPanel
                                                transition
                                                className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                <div aria-hidden="true"
                                                     className="absolute inset-0 top-1/2 bg-white shadow"/>

                                                <div className="relative bg-white">
                                                    <div className="mx-auto max-w-7xl px-8">
                                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                {category.featured.map((item) => (
                                                                    <div key={item.name}
                                                                         className="group relative text-base sm:text-sm">
                                                                        <div
                                                                            className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                            <img
                                                                                alt={item.imageAlt}
                                                                                src={item.imageSrc}
                                                                                className="object-cover object-center"
                                                                            />
                                                                        </div>
                                                                        <Link to={item.href}
                                                                              className="mt-6 block font-medium text-gray-900">
                                                                            <span aria-hidden="true"
                                                                                  className="absolute inset-0 z-10"/>
                                                                            {item.name}
                                                                        </Link>
                                                                        <p aria-hidden="true" className="mt-1">
                                                                            Shop now
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div
                                                                className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                {category.sections.map((section) => (
                                                                    <div key={section.name}>
                                                                        <p id={`${section.name}-heading`}
                                                                           className="font-medium text-gray-900">
                                                                            {section.name}
                                                                        </p>
                                                                        <ul
                                                                            role="list"
                                                                            aria-labelledby={`${section.name}-heading`}
                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                        >
                                                                            {section.items.map((item) => (
                                                                                <li key={item.name} className="flex">
                                                                                    <Link to={item.href}
                                                                                          className="hover:text-gray-800">
                                                                                        {item.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </Popover>
                                    ))}

                                    {navigation.pages.slice(1).map((page) => (
                                        <Link
                                            key={page.name}
                                            to={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverGroup>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {isSignedIn ? (
                                        <>
                                            <img
                                                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                                                alt="User Avatar"
                                                className="h-8 w-8 rounded-full"
                                            />
                                            <span className="text-sm font-medium text-gray-700">
                                                Welcome, {userName}
                                            </span>
                                            <button
                                                onClick={handleSignOut}
                                                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to="/sign-in"
                                                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                Sign in
                                            </Link>
                                            <span aria-hidden="true" className="h-6 w-px bg-gray-200"/>
                                            <Link
                                                to="/create-account"
                                                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                Create account
                                            </Link>
                                        </>
                                    )}
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <Link to="/search" className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6"/>
                                    </Link>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link to="/cart" className="group -m-2 flex items-center p-2">
                                        <ShoppingBagIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                        <span
                                            className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
