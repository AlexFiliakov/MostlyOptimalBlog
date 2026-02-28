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

## The Series

Start at the top and work down. Each post builds on the last, and the notebooks are freely available at the end of each so you can adapt the analysis to your own book of business.

1. **[Insurance Limit Selection Through Ergodicity](insurance-limit-selection-through-ergodicity-when-the-99p9th-percentile-isnt-enough.md)**: The foundation. Why the 99.9th percentile isn’t enough, and what happens when you evaluate insurance limits over 50-year horizons instead of single policy periods.

2. **[Stochasticizing Tail Uncertainty With Sobol Sequences](stochasticizing-tail-risk.md)**: You don’t know your tail shape. Nobody does. This post makes that uncertainty explicit, sweeping 25,000 insurance configurations across 1,000 tail scenarios to find the patterns that only emerge when you stop pretending you have a point estimate.

3. **[The Insurance Cliff](insurance-cliff-by-risk-profile.md)**: Plot capital against limits against bankruptcy risk and you don’t get a gentle slope. You get a cliff. Most executives have no idea where they’re standing on it.

4. **[Volatility Drag vs Premium Drag](volatility-drag-vs-premium-drag.md)**: Every deductible decision is a tug-of-war between two forces: the cost of premium eating into capital and the cost of variance destroying compounding power. The chart that changed my understanding of why insurance works even when it’s actuarially "unfair."

5. **[Risk Measures Under Catastrophic Tail Variation: VaR vs CTE](risk-measures-under-cat-tail.md)**: I broke a loss distribution’s variance and the industry-standard risk metric barely noticed. VaR increased 1.3x. CTE more than doubled. The shaded region between those curves is the tail risk your capital model can’t see.

6. **[Exploring Expectiles: A Unified Risk Measure Under Tail Variation](exploring-expectiles.md)**: VaR is backtestable but not coherent. CTE is coherent but not backtestable. Expectiles are the only law-invariant risk measure that gives you both, and they’re 5x more responsive to tail thickening than VaR.

## Learn the Framework

What started as a quick Excel model (“can I derive rational insurance prices under ergodic theory?”) quickly outgrew the spreadsheet. I moved to Python, built a simulation framework, wrote a research paper, and kept going. After hundreds of hours of development, Mostly Optimal emerged: an open-source engine for modeling how individual businesses actually grow, fail, and navigate uncertainty over time.

[mostlyoptimal.com/tutorial](https://mostlyoptimal.com/tutorial)  consists of a guide to get started in applying the framework to your specific use cases.

[mostlyoptimal.com/research](https://mostlyoptimal.com/research)  includes a research paper that describes the framework in some detail.

---

*Additional applications will be added regularly as we explore new use cases and risk scenarios.*
