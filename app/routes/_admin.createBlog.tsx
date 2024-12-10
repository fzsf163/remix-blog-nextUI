import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Radio,
  RadioGroup,
  Spinner,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import {
  IconEyeCheck,
  IconFileFunction,
  IconFileX,
  IconPlus,
  IconUpload,
} from "@tabler/icons-react";
import { Interweave } from "interweave";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { ClientOnly } from "remix-utils/client-only";
import Editor from "~/components/BlockNotEditor/editor";
import "~/components/BlockNotEditor/htmlstyle.css";
import { EyeIcon } from "~/components/poststable/EyeIcon";
import { db } from "~/utils/db.server";
import { createErrorResponse } from "~/utils/prismaErrorHandeling";
import { getSession, requireUserSession } from "~/utils/session.server";
import { TimeFormatter } from "~/utils/timeformatter";
export const loader = async ({ request }: LoaderFunctionArgs) => {
  await requireUserSession(request);
  return "Ok";
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const blog = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.data?.sessionKey?.userID;
  console.log("🚀 ~ action ~ userID:", user);
  console.log("🚀 ~ action ~ blog:", blog);
  const imgUrl = blog.get("imgUrl") as string;
  const title = blog.get("title") as string;
  const slug = blog.get("slug") as string;
  const category = blog.get("category") as string;
  const readTime = blog.get("readTime") as string;
  const tags = blog.get("tags") as string;
  const synopsis = blog.get("synopsis") as string;
  const statusRadio = blog.get("statusRadio") as string;
  const blockData = blog.get("blockData") as string;
  const timeNow = new Date().toLocaleDateString("ca");
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(
    "🚀 ~ action ~ k:",
    imgUrl,
    title,
    slug,
    category,
    readTime,
    tags,
    synopsis,
    statusRadio,
    blockData,
  );

  try {
    await db.post.create({
      data: {
        title: title,
        thumbnail: imgUrl,
        slug: slug,
        category: category,
        readTime: readTime,
        synopsis: synopsis,
        published: statusRadio === "publish" ? true : false,
        tags: tags,
        createdAt: timeNow + " " + timeZone,
        updatedAt: timeNow + " " + timeZone,
        author: {
          connect: {
            id: user,
          },
        },
      },
    });

    return "Success";
  } catch (error) {
    return createErrorResponse(error);
  }
};

// dropdown box for categories
const DropCategories = () => {
  const [selectedKeys, setSelectedKeys] = useState<
    Set<string | number> | "all"
  >(new Set(["spirituality"]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(",").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <div>
      <input
        type="text"
        name="category"
        value={selectedValue}
        hidden
        readOnly
      />
      <Dropdown
        classNames={{
          content: "bg-neutral-500/20  backdrop-blur-sm",
        }}
      >
        <DropdownTrigger className="w-full rounded-small bg-neutral-300 text-lg font-semibold text-black">
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          classNames={{
            list: "w-full bg-neutral-300 rounded-small text-black/50",
            base: "w-[30rem]",
          }}
          aria-label="Categories options"
          variant="shadow"
          color="default"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <DropdownItem key="spirituality">Spirituality</DropdownItem>
          <DropdownItem key="money">Money</DropdownItem>
          <DropdownItem key="mental_health">Mental Health</DropdownItem>
          <DropdownItem key="realationship">Realationship</DropdownItem>
          <DropdownItem key="health">Health</DropdownItem>
          <DropdownItem key="lifestyle">Lifestyle</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export default function CreateBlog() {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [finalUrl, setFinalUrl] = useState<string>("");
  const [imgFile, setImgFile] = useState<File | null>();
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [stausSelected, setStatusSelected] = useState<string>("publish");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    readTime: "",
    tags: "",
    synopsis: "",
  });

  // Handle input changes
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Optional: Auto-generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .trim();
  };

  // Handle title change with automatic slug generation
  const handleTitleChange = (e: { target: { value: string } }) => {
    const newTitle = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: newTitle,
      slug: generateSlug(newTitle),
    }));
  };
  const [html, setHTML] = useState<string>("");
  const actiondata = useActionData<typeof action>();
  const timeNow = new Date().toLocaleDateString("ca");
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // const fetcher = useFetcher();
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME!;
  const cloudPreset = process.env.CLOUDINARY_CLOUD_PRESET!;
  const API_CLOUDINARY = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const objUrl = (file: FileList | null) => {
    const img = file?.[0];
    setImgFile(img);
    const url = URL.createObjectURL(img!);
    setImgUrl(url);
  };
  const sendPhoto = async () => {
    if (imgFile != null) {
      const formData = new FormData();
      formData.append("file", imgFile);
      formData.append("upload_preset", cloudPreset);
      await toast.promise(
        fetch(API_CLOUDINARY, { method: "POST", body: formData })
          .then(async (res) => {
            if (res.ok === false) {
              const error = await res.json().then((e) => {
                return e.error.message;
              });
              throw new Error(error);
            }
            return res.json();
          })
          .then((data) => {
            setFinalUrl(data.url);
            // setImgUrl("");
          }),
        {
          pending: "Uploading Image",
          success: "Upload Successful",
          error: {
            render({ data }) {
              return <div className="text-warning-400">{`${data}`}</div>;
            },
          },
        },
      );
    }
  };
  // Function to clear the uploaded image
  const clearImage = () => {
    setImgFile(null);
    setImgUrl("");
  };

  console.log("🚀 ~ CreateBlog ~ actiondata:", actiondata);
  const Preview = (
    <div>
      <div>
        <h1>{formData.title}</h1>
      </div>
      <div>
        <img src={imgUrl === "" ? finalUrl : imgUrl} alt="" />
      </div>
      <div>
        <p>{formData.readTime}</p>
        <p>{formData.slug}</p>
        <p>{formData.synopsis}</p>
        <p>{formData.tags}</p>
        <p>{TimeFormatter.toRelativeTime(timeNow)}</p>
      </div>
      <div className="rich-text">
        <Interweave content={html}></Interweave>
      </div>
    </div>
  );
  return (
    <div className="m-auto w-fit px-4 sm:w-[90%]">
      {/* edit tab */}
      <Tabs
        color="secondary"
        aria-label="blog creation"
        size="lg"
        radius="sm"
        className="pt-3 font-bold"
      >
        <Tab
          key={"Create"}
          title={
            <div className="flex items-center justify-center gap-1">
              {" "}
              <IconPlus></IconPlus> Create
            </div>
          }
        >
          <Form method="POST" encType="multipart/form-data">
            {EditorBlock(
              imgUrl,
              objUrl,
              sendPhoto,
              finalUrl,
              timeNow,
              timeZone,
              blocks,
              setHTML,
              setBlocks,
              clearImage,
              setStatusSelected,
              stausSelected,
              formData,
              handleChange,
              handleTitleChange,
            )}
            <div>
              <div className="mb-5 grid auto-cols-max grid-flow-col gap-3">
                <input
                  type="text"
                  name="blockData"
                  value={html}
                  hidden
                  readOnly
                />
                <Button
                  color="danger"
                  radius="sm"
                  className="text-white"
                  type="submit"
                >
                  <IconFileFunction></IconFileFunction>
                  Save
                </Button>
                <Button
                  color="secondary"
                  radius="sm"
                  className="text-white"
                  type="button"
                >
                  <EyeIcon className="size-12"></EyeIcon>
                  <span>See Blog</span>
                </Button>
              </div>
            </div>
          </Form>
        </Tab>
        <Tab
          key={"Preview"}
          title={
            <div className="flex items-center justify-center gap-1">
              {" "}
              <IconEyeCheck></IconEyeCheck> Preview
            </div>
          }
        >
          {Preview}
        </Tab>
      </Tabs>
    </div>
  );
}
function EditorBlock(
  imgUrl: string,
  objUrl: (file: FileList | null) => void,
  sendPhoto: () => Promise<void>,
  finalUrl: string,
  timeNow: string,
  timeZone: string,
  blocks: Block[],
  setHTMl: (html: string) => void,
  setBlocks: (blocks: Block[]) => void,
  clearImage: () => void,
  setStatusSelected: (status: string) => void,
  stausSelected: string,
  formData: {
    title: string;
    slug: string;
    readTime: string;
    tags: string;
    synopsis: string;
  },
  handleChange: (e: { target: { name: string; value: string } }) => void,
  handleTitleChange: (e: { target: { value: string } }) => void,
) {
  return (
    <div className="relative w-full">
      <div className="h-[20rem] w-full rounded-md bg-gray-200 outline-dashed outline-1 outline-blue-400">
        <div className="relative h-full w-full">
          {imgUrl ? (
            <img
              src={imgUrl}
              className="h-full w-full rounded-md object-cover"
              alt="Uploaded thumbnail"
            />
          ) : (
            <label
              htmlFor="thumbImage"
              className="grid h-full w-full cursor-pointer place-items-center bg-blue-400 text-xl font-semibold text-white shadow transition-colors duration-700 ease-soft-spring hover:bg-pink-300"
            >
              <div className="flex items-center gap-2">
                <span>Upload Thumbnail</span>
                <IconUpload stroke={2} />
              </div>
              <input
                id="thumbImage"
                type="file"
                name="thumbImage"
                accept="image/*"
                hidden
                onChange={(e) => objUrl(e.currentTarget.files)}
              />
            </label>
          )}
        </div>

        {imgUrl && (
          <div className="absolute top-0 mt-4 flex gap-4 pl-2">
            <button
              onClick={clearImage}
              className="flex items-center justify-center gap-1 rounded-md bg-red-500 px-3 py-2 text-white"
            >
              <IconFileX></IconFileX>
              Clear Image
            </button>

            <button
              onClick={sendPhoto}
              className="flex items-center justify-center gap-1 rounded-md bg-green-600 px-3 py-2 text-white"
            >
              <IconUpload />
              Upload Image
            </button>
          </div>
        )}
      </div>
      <input
        type="text"
        name="imgUrl"
        id="imgUrl"
        hidden
        readOnly
        value={finalUrl}
      />
      <div className="grid h-full w-full auto-cols-fr auto-rows-auto gap-5 py-4 [&_input]:border-b-3 [&_input]:border-blue-400 [&_input]:p-1 [&_input]:font-semibold [&_input]:outline-none [&_textarea]:border-b-3 [&_textarea]:border-blue-400 [&_textarea]:p-1 [&_textarea]:font-semibold [&_textarea]:outline-none">
        <input
          type="text"
          name="title"
          placeholder="write a title for the blog"
          className="col-span-5 w-full bg-transparent text-xl capitalize transition-all duration-500 ease-soft-spring focus:border-green-600"
          value={formData.title}
          onChange={handleTitleChange}
        ></input>
        <input
          type="text"
          name="slug"
          placeholder="slug for URL"
          className="text-md col-span-3 w-full bg-transparent capitalize transition-all duration-500 ease-soft-spring focus:border-green-600"
          value={formData.slug}
          onChange={handleChange}
        ></input>
        <div className="col-span-2">
          <DropCategories></DropCategories>
        </div>
        <input
          type="text"
          name="readTime"
          placeholder="Reading Time"
          className="text-md col-span-1 w-full bg-transparent capitalize transition-all duration-500 ease-soft-spring focus:border-green-600"
          value={formData.readTime}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="tags"
          placeholder="Tags [optional]"
          className="text-md col-span-4 w-full bg-transparent capitalize transition-all duration-500 ease-soft-spring focus:border-green-600"
          value={formData.tags}
          onChange={handleChange}
        ></input>
        <textarea
          name="synopsis"
          placeholder="Synopsis"
          className="text-md col-span-5 w-full bg-transparent transition-all duration-500 ease-soft-spring focus:border-green-600"
          rows={4}
          value={formData.synopsis}
          onChange={handleChange}
        ></textarea>
        <div className="text-md col-auto flex items-center justify-start gap-4 text-black/60 sm:col-span-4 [&_p]:text-gray-400">
          <div className="space-y-2">
            <div className="font-semibold text-foreground-500">
              <RadioGroup
                label="Status"
                orientation="horizontal"
                value={stausSelected}
                onValueChange={setStatusSelected}
                name="statusRadio"
              >
                <Radio value="publish">Publish</Radio>
                <Radio value="draft">Draft</Radio>
              </RadioGroup>
            </div>
            <p>
              Create: {timeNow} - {timeZone}
            </p>
            <p>Upadate: {timeNow}</p>
          </div>
        </div>
      </div>
      <br />
      <ClientOnly fallback={<Spinner />}>
        {() => (
          <Editor
            blocks={blocks}
            setHTML={setHTMl}
            setBlocks={setBlocks}
          ></Editor>
        )}
      </ClientOnly>
      <br />
      <br />
      <br />
    </div>
  );
}
