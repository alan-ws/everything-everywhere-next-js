import { NextResponse } from "next/server";

// config with custom matcher
export const config = {
  matcher: "/:path*.js.map",
};

export default function middleware() {
  return NextResponse.json({
    version: 0,
    file: "",
    mappings: "",
    sources: [],
    sourcesContent: [],
    names: [],
    sourceRoot: "",
  });
}
