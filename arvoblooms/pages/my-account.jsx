import { useSession, getProviders, signIn, signOut } from "next-auth/react";

export default function Account({ providers }) {
  // Returns user details
  const { data: session } = useSession();

  const navigation = [
    { name: "My Details", href: "#", current: true },
    { name: "My Orders", href: "#", current: false },
    { name: "Subscriptions", href: "#", current: false },
    { name: "Gift Cards", href: "#", current: false },
    { name: "Address", href: "#", current: false },
    { name: "Preferences", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-24 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <span className="text-5xl">🌺</span>

              {session ? (
                <>
                  {/* User logged in */}
                  <h2 className="mt-6 text-3xl font-extrabold text-zinc-900">
                    Hi, {session.user.name ?? session.user.email}
                    <img
                      className="inline-block ml-3 h-11 w-11 rounded-full"
                      src={session.user.image}
                      alt="user avatar"
                    />
                  </h2>

                  {/* User menu */}
                  <nav className="space-y-1 mt-8" aria-label="Sidebar">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-zinc-100 text-zinc-900"
                            : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
                          "flex items-center px-3 py-2 text-sm font-medium rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </nav>

                  <button
                    type="submit"
                    className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                    onClick={handleSignout}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  {/* User logged out */}
                  <div className="mt-8">
                    {/* Sign in with provider */}
                    <div>
                      <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-zinc-900">
                          Sign in to your account
                        </h2>

                        <p className="mt-8 text-sm font-medium text-zinc-700">
                          Sign in with
                        </p>

                        <div className="mt-1 grid grid-cols-3 gap-3">
                          {Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                              <button
                                onClick={() => signIn(provider.id)}
                                className="w-full inline-flex justify-center py-2 px-4 border border-zinc-300 rounded-md shadow-sm bg-white text-sm font-medium text-zinc-500 hover:bg-zinc-50"
                              >
                                {/* Sign in with {provider.name} */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  viewBox="0 0 16 16"
                                >
                                  {" "}
                                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 relative">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="w-full border-t border-zinc-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-zinc-500">
                            Or continue with
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Sign in form */}
                    <div className="mt-6">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-zinc-700"
                          >
                            Email address
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-zinc-700"
                          >
                            Password
                          </label>
                          <div className="mt-1">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 text-zinc-600 focus:ring-zinc-500 border-zinc-300 rounded"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-zinc-900"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-zinc-600 hover:text-zinc-500"
                            >
                              Forgot your password?
                            </a>
                          </div>
                        </div>

                        <div>
                          {session ? (
                            <button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                              onClick={handleSignout}
                            >
                              Sign out
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                            >
                              Sign in
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
