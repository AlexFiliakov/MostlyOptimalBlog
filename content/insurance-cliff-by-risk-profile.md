---
title: "The Insurance Cliff: Where Small Decisions Create Catastrophic Outcomes"
date: 2025-10-26
---
Just as courage lies somewhere between cowardice and recklessness, optimal returns lie somewhere between total safety and heedless riskiness. In this post, we will develop an approach to analyze the tradeoff between risk of ruin and insurance limits.

## Company Configuration
I used the following company assumptions across all simulations, which can be further tailored to a specific business:

- Asset Turnover Ratio: 1.0 (Revenue = Assets * Turnover)
- EBITA Before Claims and Insurance: 15%
- Tax Rate: 25%
- Retention Ratio: 70% (30% dividends)
- PP&E Ratio: 0% (meaning no depreciation expense)
- Steady \$100K Deductible for all scenarios

Initial Capital varied from \$5M up to \$100M to assess its impact on risk of ruin across a 25-year time horizon.

Bankruptcy had two forms: the first is having assets fall below a threshold of \$10K, and the second is not having the liquidity to meet financial obligations in any given time period.

## Loss Distributions

The simulation employed a four-tier loss structure that captures the full spectrum from routine operational losses to catastrophic events, undifferentiated by nature of loss (so Workers' Compensation, Property, Cyber, etc. were all combined into a single loss structure):

**Tier 1: Attritional Losses** (routine operational incidents)
- Frequency: Poisson varying with revenue
- Severity: Lognormal
- Examples: Equipment damage, minor workplace injuries, small property claims

**Tier 2: Large Losses** (significant incidents)
- Frequency: Poisson varying with revenue
- Severity: Lognormal
- Examples: Major equipment failures, significant product recalls, material liability claims

**Tier 3: Catastrophic Losses** (severe events)
- Frequency: Poisson varying with revenue
- Severity: Pareto
- Examples: Facility fires, large product liability events, major supply chain disruptions

**Tier 4: Extreme Losses** (tail events beyond historical experience)
- Threshold: 99.95th percentile of overall loss distribution
- Severity: Generalized Pareto Distribution (GPD)
- Examples: Company-threatening scenarios with limited historical precedent, such as nuclear verdicts

This structure assumes loss events are independent (no correlation), a simplification that understates systemic risk.

**For a more complete overview of the simulation, refer to the research paper [here](https://mostlyoptimal.com/research)**

## Exploring Results: The Risk of Ruin Cliff

Below, I plotted 3 different Risk Profiles:
- Risk Averse (accepting only 0.5% Risk of Ruin)
- Risk Neutral (requiring at most 1% Risk of Ruin)
- Risk Seeking (willing to accept 2.5% Risk of Ruin)

![Insurance Cliff: Where Companies Go Bankrupt](images/2025_10_26_ror_cliff/insurance_cliff_animation.gif)

As you can see, the Risk Seeking scenario resides near the middle of the "cliff", gliding along the surface where the risk-return tradeoff is minimized the fastest. The Risk Neutral scenario is near the bottom of the risk cliff, meanwhile the Risk Averse scenario is on the edge of the "foothills," the boundary where further increase in limit does little to impact the risk of ruin.

## Risk Appetite and Limit Boundaries

More precisely, we can explore the limits that correspond to various risk appetites (the lines marked on the surface plot above).

![Limit Boundaries for Different Risk Profiles](images/2025_10_26_ror_cliff/limit_boundaries_for_different_risk_profiles.png)

We can see that each boundary is a nearly linear function when plotted on the log-log scale.

For a company with \$10M initial capital and previously defined assumptions, this translates into the following limits:
- Risk Averse: \$120M
- Risk Neutral: \$60-\$65M
- Risk Seeking: \$20-\$25M

## Apply This to Your Company

The complete implementation is available for you to modify and run:

**Download the Code**:
- [Jupyter Notebook — Stochastic Tail Simulations](https://github.com/AlexFiliakov/Ergodic-Insurance-Limits/blob/main/ergodic_insurance/notebooks/results_limit_ror_cliff/ergodicity_limit_ror_cliff.ipynb)
- [Python Script — Company and Loss Configuration](https://github.com/AlexFiliakov/Ergodic-Insurance-Limits/blob/main/ergodic_insurance/notebooks/results_limit_ror_cliff/run_limit_ror_cliff_colab.py)

**Install the Framework**:
```python
!pip install --user --upgrade --force-reinstall git+https://github.com/AlexFiliakov/Ergodic-Insurance-Limits
```

**Quick Start Guide**:
1. Start with the example notebook to understand the structure
2. Modify the company configuration to match your financials (lines 79-86 in the Python script)
3. Adjust loss distributions to reflect your exposure (lines 98-102 for frequencies, 151-183 for severities)
4. Define your uncertainty distributions for the parameters you want to stochasticize
5. Run locally with smaller simulation counts (1,000 sims) or on Google Colab for full-scale runs

**Need Help?** The framework documentation includes:
- [High-level overview and motivation](https://mostlyoptimal.com/)
- [Research paper with mathematical details](https://mostlyoptimal.com/research)
- [Tutorial for adapting to your use case](https://mostlyoptimal.com/tutorial)
