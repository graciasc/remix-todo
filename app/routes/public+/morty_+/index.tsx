import * as Form from "@radix-ui/react-form";
export default function MortyIndex() {
  return (
    <Form.Root className="p-12">
      <Form.Field name="search" className="flex space-x-5">
        <div className="flex items-center">
          <Form.Label className="space-x-2 text-xl bold">Search</Form.Label>
        </div>
        <Form.Message match="valueMissing" className="border-amber-50 p-2">
          This hit the rick and morty api
        </Form.Message>
        <Form.Message match="typeMismatch">
          Please provide some text
        </Form.Message>
        <Form.Control asChild>
          <input
            className="placeholder:italic placeholder:text-slate-400  w-1/4 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-rose-500 focus:ring-rose-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            required
          />
        </Form.Control>
      </Form.Field>
    </Form.Root>
  );
}
