// splat route --> this is a catch all unknown routes
// make a fun custom 404 page (using Adobe Firefly)
export default function FourOhFour() {
  return (
    <div className="h-full flex justify-center font-roboto-sans items-center">
      <div className="text-center space-y-2">
        <div className="w-72 rounded-md shadow-md">
          {/* <img */}
          {/*   className="rounded-md shadow-md object-fit" */}
          {/*   src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" */}
          {/*   alt="404" */}
          {/* /> */}
        </div>

        <h1 className="font-bold text-md text-2xl text-gray-800 ">⓸⓪⓸ Page</h1>
        <p className="text-red-400 text-sm"> Route Doesn&apos;t exist </p>
      </div>
    </div>
  );
}
