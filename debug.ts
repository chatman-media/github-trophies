import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import requestHandler from "./index.ts";

serve(requestHandler, { port: 8080 });
