"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, FileUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { buttonVariants } from "@/components/ui/button";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const LOREM_SHORT =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.";

function Divider() {
  return <div className="border-t border-[#E5E5E5]" />;
}

export default function PositionDetailPage() {
  const [submitted, setSubmitted] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const canSubmit = termsChecked && privacyChecked;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">

      {/* ── Position header ── */}
      <section>
        <Link
          href="/about/careers"
          className="text-xs text-[#6B6B6B] hover:text-[#1A1A1A] mb-6 inline-block"
        >
          ← All positions
        </Link>
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-4">
          Head of Coaching
        </h1>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-[#6B6B6B] text-[#6B6B6B]">
            Brno
          </Badge>
          <Badge variant="secondary">Full-time</Badge>
        </div>
      </section>

      <Divider />

      {/* ── Role description ── */}
      <section className="space-y-5">
        <h2 className="text-lg font-bold text-[#1A1A1A]">What you'll do</h2>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">{LOREM}</p>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">{LOREM_SHORT}</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#6B6B6B]">
          <li>Design and deliver coaching programmes for all ability levels</li>
          <li>Lead and manage the coaching team across the Brno location</li>
          <li>Develop curriculum for kids' courses and holiday camps</li>
          <li>Monitor athlete progress and adapt training plans accordingly</li>
          <li>Collaborate with the route-setting team on training-wall usage</li>
        </ul>

        <h2 className="text-lg font-bold text-[#1A1A1A] pt-2">
          What we're looking for
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#6B6B6B]">
          <li>Minimum 3 years of coaching experience in climbing or a related sport</li>
          <li>Certified coaching qualification (national or international level)</li>
          <li>Strong leadership and team communication skills</li>
          <li>Fluent Czech; working English an advantage</li>
        </ul>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">{LOREM}</p>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">{LOREM_SHORT}</p>
      </section>

      <Divider />

      {/* ── Contact person ── */}
      <section>
        <h2 className="text-lg font-bold text-[#1A1A1A] mb-5">
          Contact person
        </h2>
        <Card className="gap-0 p-5 max-w-xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 flex-shrink-0 rounded-full bg-[#D9D9D9]" />
            <div>
              <p className="font-semibold text-sm text-[#1A1A1A]">Jan Novák</p>
              <p className="text-xs text-[#6B6B6B]">Gym Director</p>
            </div>
          </div>
          <div className="space-y-2">
            <a
              href="tel:+420111222333"
              className="flex items-center gap-2 text-xs text-[#6B6B6B] hover:text-[#1A1A1A]"
            >
              <Phone size={13} />
              +420 111 222 333
            </a>
            <a
              href="mailto:jan.novak@hangargyms.cz"
              className="flex items-center gap-2 text-xs text-[#6B6B6B] hover:text-[#1A1A1A]"
            >
              <Mail size={13} />
              jan.novak@hangargyms.cz
            </a>
          </div>
        </Card>
      </section>

      <Divider />

      {/* ── Company info ── */}
      <section>
        <h2 className="text-lg font-bold text-[#1A1A1A] mb-4">Company info</h2>
        <div className="text-sm space-y-1">
          <p className="font-medium text-[#1A1A1A]">Hangar Rockets Brno, s.r.o.</p>
          <p className="text-[#6B6B6B]">Dornych 51, 617 00 Brno</p>
          <p className="text-[#6B6B6B]">IČO: 12345678</p>
          <p className="text-[#6B6B6B]">DIČ: CZ12345678</p>
        </div>
      </section>

      <Divider />

      {/* ── Application form ── */}
      <section>
        <Card className="gap-0 p-6">
          <h2 className="text-lg font-bold text-[#1A1A1A] mb-6">
            Apply for this position
          </h2>

          {submitted ? (
            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-4 text-sm text-green-800">
              Thank you — we&apos;ll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#1A1A1A]">
                    First name *
                  </label>
                  <Input placeholder="First name" required />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#1A1A1A]">
                    Last name *
                  </label>
                  <Input placeholder="Last name" required />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1A1A1A]">
                  Email address *
                </label>
                <Input type="email" placeholder="your@email.com" required />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1A1A1A]">
                  Phone
                </label>
                <Input type="tel" placeholder="+420 xxx xxx xxx" />
              </div>

              {/* CV upload */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1A1A1A]">
                  CV *
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-[#E5E5E5] px-4 py-3 text-sm text-[#6B6B6B] transition-colors hover:border-[#1A1A1A] hover:text-[#1A1A1A]">
                  <FileUp size={16} />
                  Upload CV (PDF or DOC)
                  <input type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                </label>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#1A1A1A]">
                  Notes
                </label>
                <Textarea
                  placeholder="Anything you'd like to add..."
                  rows={4}
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={termsChecked}
                    onCheckedChange={(v) => setTermsChecked(Boolean(v))}
                    className="mt-0.5"
                  />
                  <label
                    htmlFor="terms"
                    className="cursor-pointer text-xs text-[#6B6B6B] leading-relaxed"
                  >
                    I agree to the{" "}
                    <Link href="#" className="text-[#1A1A1A] underline">
                      Terms &amp; Conditions
                    </Link>
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy-careers"
                    checked={privacyChecked}
                    onCheckedChange={(v) => setPrivacyChecked(Boolean(v))}
                    className="mt-0.5"
                  />
                  <label
                    htmlFor="privacy-careers"
                    className="cursor-pointer text-xs text-[#6B6B6B] leading-relaxed"
                  >
                    I agree to the processing of my personal data in accordance
                    with the{" "}
                    <Link href="/privacy-policy" className="text-[#1A1A1A] underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className={buttonVariants()}
              >
                Send application
              </button>
            </form>
          )}
        </Card>
      </section>
    </div>
  );
}
