import { useState } from "react";
import Starfield from "./Starfield";
// import Aurora from "./Aurora";
import { Twitter, Instagram, Youtube, Send, Check, Sparkles } from "lucide-react";

export default function ComingSoon() {
const [submitted, setSubmitted] = useState(false);

return (
    <main className="min-h-dvh bg-transparent text-neutral-100">
      <Starfield />
      {/* <Aurora /> */}


<div className="mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
{/* Logo / Wordmark */}
<div className="mb-6 inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
<Sparkles className="size-4 text-cyan-300" />
<span className="text-xs tracking-widest text-white/80">NAVIGATE THE FUTURE</span>
</div>


<h1 className="mb-3 text-5xl font-black tracking-tight sm:text-6xl">Navor</h1>
<p className="mx-auto mb-8 max-w-xl text-balance text-white/70">
AI‑native video creation & sharing. Studio‑grade tools, social by design. Launching soon.
</p>


{/* Email capture (Formspree/Netlify forms ready) */}
{submitted ? (
<div className="mb-10 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-300 ring-1 ring-emerald-400/30">
<Check className="size-4" />
<span className="text-sm">You’re on the list. Thank you!</span>
</div>
) : (
<form
className="mb-10 flex w-full max-w-lg items-center gap-2"
action="https://formspree.io/f/mdkwvyzl"
method="POST"
onSubmit={() => {
 // Optimistic success UI; Formspree still handles the POST by default
 setSubmitted(true);
}}
>
<input
required
name="email"
type="email"
placeholder="Enter your email"
className="w-full rounded-2xl bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400"
/>
<button
type="submit"
className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-neutral-900 transition hover:bg-cyan-300 focus:outline-none"
>
<Send className="size-4" />
Notify me
</button>
</form>
)}


{/* Socials */}
<div className="mb-14 flex items-center gap-4 text-white/60">
<a href="https://twitter.com/navor_app" className="inline-flex items-center gap-2 hover:text-white" target="_blank" rel="noreferrer">
<Twitter className="size-4" />
<span className="text-sm">Twitter</span>
</a>
<span className="text-white/20">•</span>
<a href="https://instagram.com/navor_app" className="inline-flex items-center gap-2 hover:text-white" target="_blank" rel="noreferrer">
<Instagram className="size-4" />
<span className="text-sm">Instagram</span>
</a>
<span className="text-white/20">•</span>
<a href="https://youtube.com/@navor_app" className="inline-flex items-center gap-2 hover:text-white" target="_blank" rel="noreferrer">
<Youtube className="size-4" />
<span className="text-sm">YouTube</span>
</a>
</div>


{/* Footer */}
<div className="mt-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white/50">
<p className="mb-1">© {new Date().getFullYear()} Navor. All rights reserved.</p>
<p>We’ll only use your email to send launch updates. <a href="#" className="underline hover:text-white">Privacy</a></p>
</div>
</div>
</main>
);
}