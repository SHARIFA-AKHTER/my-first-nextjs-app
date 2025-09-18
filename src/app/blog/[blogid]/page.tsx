const DynamicBlogPage = async ({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) => {
  const { blogid } = await params;
  return (
    <div>
      <h1 className="text-4xl"> Dynamic Blog Page BlogId: {blogid}</h1>
    </div>
  );
};

export default DynamicBlogPage;
