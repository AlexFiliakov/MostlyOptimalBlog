---
title: Applications of the Python Package
---

Welcome to the Mostly Optimal Applications of the `Ergodic-Insurance-Limits` Python package, designed to help risk professionals make more informed decisions about insurance coverage limits and risk retention strategies.

## What You'll Find Here

These applications demonstrate how ergodic optimization principles can be applied to real-world insurance and risk management challenges. Each application includes:

- **Interactive analysis** using realistic data and scenarios
- **Quantitative frameworks** for evaluating insurance decisions beyond traditional risk metrics
- **Practical insights** for professionals navigating complex coverage decisions

## For Risk Professionals

Whether you're evaluating catastrophic coverage limits, optimizing risk retention strategies, or challenging conventional wisdom about "adequate" insurance levels, these applications provide a rigorous, time-average perspective on insurance decision-making.

The Python package enables you to adapt these analyses to your organization's specific risk profile and constraints.

## Explore the Applications

### Static Operational Volatility

The following applications all consist of simulations without operational volatility. The notebooks are freely available at the end of each blog post, so you can adapt these configurations to your own needs.

- [Insurance Limit Selection Through Ergodicity](insurance-limit-selection-through-ergodicity-when-the-99p9th-percentile-isnt-enough.md) Insurance limit selection, viewed through an ergodic lens, reveals patterns that traditional actuarial analysis can miss. The tradeoff between median and mean performance, the interaction between capitalization and limit appetite, and the amplifying effects of tail thickness all emerge clearly from long-term simulation.

- [Stochasticizing Tail Uncertainty With Sobol Sequences](stochasticizing-tail-risk.md) This article demonstrates an approach to stochasticizing the parameters we’re most uncertain about, specifically the frequency multiplier and extreme loss tail shape, and exploring the full outcome space across insurance program designs. We use Sobol sequences (quasi-random sampling) to efficiently cover this high-dimensional uncertainty space, then analyze how nearly 25,000 insurance program configurations perform under 1,000 different tail scenarios.

- [The Insurance Cliff](insurance-cliff-by-risk-profile.md) When you plot the relationship between initial capital, policy limits, and bankruptcy risk, you don’t get a gentle slope. You get a cliff. In the active tail of modeled losses, where your business operates, the choice of limits has a disproportionate effect on results.

## Learn the Framework

What started as a quick Excel model (“can I derive rational insurance prices under ergodic theory?”) quickly outgrew the spreadsheet. I moved to Python, built a simulation framework, wrote a research paper, and kept going. After hundreds of hours of development, Mostly Optimal emerged: an open-source engine for modeling how individual businesses actually grow, fail, and navigate uncertainty over time.

[mostlyoptimal.com/tutorial](https://mostlyoptimal.com/tutorial)  consists of a guide to get started in applying the framework to your specific use cases.

[mostlyoptimal.com/research](https://mostlyoptimal.com/research)  includes a research paper that describes the framework in some detail.

---

*Additional applications will be added regularly as we explore new use cases and risk scenarios.*
