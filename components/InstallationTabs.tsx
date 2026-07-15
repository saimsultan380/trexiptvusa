"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Clock, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  deviceGuides,
  type GuideStep,
  type DeviceGuide,
} from "./installationGuideData";

function InfoBoxIcon({ type }: { type: string }) {
  if (type === "time") return <Clock className="h-5 w-5 text-[#ff6b35] shrink-0" />;
  return <LayoutGrid className="h-5 w-5 text-[#ff6b35] shrink-0" />;
}

function StepItem({ step, index }: { step: GuideStep; index: number }) {
  return (
    <div className="flex gap-3 sm:gap-5 group">
      <div className="flex flex-col items-center shrink-0">
        <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#ff6b35] text-white text-[11px] sm:text-xs font-bold">
          {index + 1}
        </div>
      </div>
      <div className="pb-4 sm:pb-6 flex-1 min-w-0">
        <h4 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 mb-1 leading-snug">
          {step.title}
        </h4>
        <p className="text-[12px] sm:text-sm text-zinc-600 leading-relaxed">{step.description}</p>
        {step.note && (
          <p className="text-[12px] sm:text-sm text-zinc-500 leading-relaxed mt-1.5 sm:mt-2">
            <span className="font-bold text-zinc-600">Step Note:</span> {step.note}
          </p>
        )}
      </div>
    </div>
  );
}

function BrandAppsBlock({
  title,
  brands,
}: {
  title?: string;
  brands: NonNullable<DeviceGuide["brandApps"]>;
}) {
  return (
    <div className="mb-6 ml-12 sm:ml-[52px]">
      {title && <p className="text-sm font-bold text-zinc-900 mb-4">{title}</p>}
      <div className="space-y-3">
        {brands.map((brand, idx) => (
          <div key={idx} className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
            <p className="text-sm font-bold text-zinc-900 mb-1">{brand.brand}</p>
            <p className="text-sm text-zinc-500 mb-2">{brand.storeNote}</p>
            <ul className="space-y-1">
              {brand.apps.map((app, appIdx) => (
                <li key={appIdx} className="text-sm text-zinc-600 flex gap-2">
                  <span className="text-[#ff6b35]">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepsList({
  steps,
  brandApps,
  brandAppsTitle,
  brandAppsAfterStep = 1,
}: {
  steps: GuideStep[];
  brandApps?: DeviceGuide["brandApps"];
  brandAppsTitle?: string;
  brandAppsAfterStep?: number;
}) {
  return (
    <div className="space-y-1">
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <StepItem step={step} index={idx} />
          {brandApps && idx === brandAppsAfterStep && (
            <BrandAppsBlock title={brandAppsTitle} brands={brandApps} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function GuideContent({ guide }: { guide: DeviceGuide }) {
  return (
    <div className="flex flex-col">
      {/* Header row: text left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-6 sm:mb-8">
        <div className="lg:col-span-7">
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3 leading-tight">
            {guide.titlePrefix}{" "}
            <span className="text-[#ff6b35]">Trex IPTV</span> on {guide.titleDevice}
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed mb-4 sm:mb-5">
            {guide.description}
          </p>

          {/* Info boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {guide.infoBoxes.map((box, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 sm:gap-3 rounded-xl border border-orange-200 bg-orange-50/60 px-3 py-2.5 sm:px-4 sm:py-3"
              >
                <InfoBoxIcon type={box.type} />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-0.5">
                    {box.label}
                  </p>
                  <p className="text-sm font-bold text-[#ff6b35] leading-snug">
                    {box.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration */}
        <div className="lg:col-span-5 flex items-start justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="relative w-full max-w-[260px] sm:max-w-[380px]">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/All Supported Devices for Trex IPTV.PNG"
                alt="All Supported Devices for Trex IPTV"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Before you start */}
      {guide.beforeStart && guide.beforeStart.length > 0 && (
        <div className="mb-5 sm:mb-8 rounded-xl border border-zinc-100 bg-zinc-50/80 p-3 sm:p-5">
          <p className="text-sm font-bold text-zinc-900 mb-3">
            {guide.beforeStartTitle ?? "BEFORE YOU START, Have These Ready:"}
          </p>
          <ul className="space-y-2">
            {guide.beforeStart.map((item, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-zinc-600 leading-relaxed">
                <span className="text-[#ff6b35] font-bold shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Important note */}
      {guide.importantNote && (
        <div className="mb-5 sm:mb-8 rounded-xl border border-orange-200 bg-orange-50/40 p-3 sm:p-5">
          <p className="text-sm font-bold text-zinc-900 mb-1">Important Note:</p>
          <p className="text-sm text-zinc-600 leading-relaxed">{guide.importantNote}</p>
        </div>
      )}

      {/* Single steps list */}
      {guide.steps && (
        <StepsList
          steps={guide.steps}
          brandApps={guide.brandApps}
          brandAppsTitle={guide.brandAppsTitle}
        />
      )}

      {/* Methods */}
      {guide.methods?.map((method, methodIdx) => (
        <div key={methodIdx} className={methodIdx > 0 ? "mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-zinc-100" : ""}>
          <h4 className="text-sm sm:text-base font-bold text-zinc-900 mb-4 sm:mb-6">{method.title}</h4>
          <StepsList steps={method.steps} />
        </div>
      ))}

      {/* Sub-sections (Windows/Mac) */}
      {guide.subSections?.map((section, sectionIdx) => (
        <div
          key={sectionIdx}
          className={sectionIdx > 0 ? "mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-zinc-100" : ""}
        >
          <h4 className="text-sm sm:text-base font-bold text-zinc-900 mb-4 sm:mb-6">{section.title}</h4>
          <StepsList steps={section.steps} />
        </div>
      ))}

      {/* Alternative section (VLC) */}
      {guide.alternativeSection && (
        <div className="mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-zinc-100">
          <h4 className="text-sm sm:text-base font-bold text-zinc-900 mb-4 sm:mb-6">
            {guide.alternativeSection.title}
          </h4>
          <StepsList steps={guide.alternativeSection.steps} />
        </div>
      )}

      {/* Troubleshooting */}
      {guide.troubleshooting && guide.troubleshooting.length > 0 && (
        <div className="mt-10 pt-8 border-t border-zinc-100">
          <h4 className="text-base font-bold text-zinc-900 mb-5">QUICK TROUBLESHOOTING</h4>
          <div className="space-y-4">
            {guide.troubleshooting.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                <p className="text-sm font-bold text-zinc-900 mb-1">{item.question}</p>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function InstallationTabs() {
  const [activeTab, setActiveTab] = useState(deviceGuides[0].id);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const activeGuide = deviceGuides.find((d) => d.id === activeTab) || deviceGuides[0];

  const handleTabClick = (deviceId: string) => {
    setActiveTab(deviceId);

    if (contentRef.current && window.innerWidth < 1024) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-zinc-50/50">
      {/* Mobile: compact horizontal device picker */}
      <div className="lg:hidden mb-4">
        <span className="text-[#ff6b35] text-[10px] font-bold tracking-widest uppercase block mb-1">
          Installation Guide
        </span>
        <h2 className="text-lg font-bold text-zinc-900 mb-3 leading-tight">
          All Supported Devices for Trex IPTV
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {deviceGuides.map((device) => {
            const isActive = activeTab === device.id;
            const Icon = device.icon;
            return (
              <button
                key={device.id}
                onClick={() => handleTabClick(device.id)}
                className={`flex shrink-0 items-center gap-2 px-3 py-2 rounded-lg text-left transition-all ${
                  isActive
                    ? "bg-[#ff6b35] text-white shadow-sm"
                    : "bg-white border border-zinc-200 text-zinc-700"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[11px] font-bold whitespace-nowrap">{device.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        {/* Left Sidebar — desktop only */}
        <div className="hidden lg:block lg:w-[340px] shrink-0 bg-white rounded-3xl border border-zinc-100 p-6 sm:p-8 shadow-sm h-fit">
          <div className="mb-4 sm:mb-6 text-left">
            <span className="text-[#ff6b35] text-[11px] font-bold tracking-widest uppercase">
              Installation Guide
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-2 leading-tight">
              All Supported Devices for Trex IPTV
            </h2>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
              Pick your device below and follow the step-by-step setup guide.
            </p>
          </div>

          <div className="space-y-1.5">
            {deviceGuides.map((device) => {
              const isActive = activeTab === device.id;
              const Icon = device.icon;
              return (
                <button
                  key={device.id}
                  onClick={() => handleTabClick(device.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group text-left ${
                    isActive
                      ? "bg-orange-50/70 border border-orange-200 text-[#ff6b35] shadow-sm"
                      : "bg-white border border-transparent text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg transition-colors shrink-0 ${
                        isActive
                          ? "bg-white text-[#ff6b35]"
                          : "bg-zinc-50 text-zinc-400 group-hover:text-zinc-600"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[13px] font-bold leading-snug truncate">
                      {device.name}
                    </span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-all ${
                      isActive ? "translate-x-0.5 text-[#ff6b35]" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Area */}
        <div
          ref={contentRef}
          className="flex-1 bg-white rounded-2xl sm:rounded-3xl border border-zinc-100 p-5 sm:p-10 lg:p-12 shadow-sm min-h-0 lg:min-h-[600px] scroll-mt-24"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <GuideContent guide={activeGuide} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
