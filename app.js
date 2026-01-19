const input = document.querySelector("#dataInput");
const fileInput = document.querySelector("#fileInput");
const hasHeaderCheckbox = document.querySelector("#hasHeader");
const stressUnitSelect = document.querySelector("#stressUnit");
const showTrueCheckbox = document.querySelector("#showTrue");
const stressMinInput = document.querySelector("#stressMin");
const stressMaxInput = document.querySelector("#stressMax");
const applyRangeBtn = document.querySelector("#applyRangeBtn");
const clearRangeBtn = document.querySelector("#clearRangeBtn");
const selectAllRangeBtn = document.querySelector("#selectAllRangeBtn");
const selectYieldRangeBtn = document.querySelector("#selectYieldRangeBtn");
const selectUtsRangeBtn = document.querySelector("#selectUtsRangeBtn");
const selectPlasticRangeBtn = document.querySelector("#selectPlasticRangeBtn");
const strainMinInput = document.querySelector("#strainMin");
const strainMaxInput = document.querySelector("#strainMax");
const applyStrainRangeBtn = document.querySelector("#applyStrainRangeBtn");
const clearStrainRangeBtn = document.querySelector("#clearStrainRangeBtn");
const selectAllStrainRangeBtn = document.querySelector("#selectAllStrainRangeBtn");
const selectYieldStrainRangeBtn = document.querySelector("#selectYieldStrainRangeBtn");
const selectUtsStrainRangeBtn = document.querySelector("#selectUtsStrainRangeBtn");
const selectPlasticStrainRangeBtn = document.querySelector("#selectPlasticStrainRangeBtn");
const lineFromInput = document.querySelector("#lineFrom");
const lineToInput = document.querySelector("#lineTo");
const applyLineRangeBtn = document.querySelector("#applyLineRangeBtn");
const clearLineRangeBtn = document.querySelector("#clearLineRangeBtn");
const selectAllLineRangeBtn = document.querySelector("#selectAllLineRangeBtn");
const selectYieldLineRangeBtn = document.querySelector("#selectYieldLineRangeBtn");
const selectUtsLineRangeBtn = document.querySelector("#selectUtsLineRangeBtn");
const selectPlasticLineRangeBtn = document.querySelector("#selectPlasticLineRangeBtn");
const referenceBtn = document.querySelector("#referenceBtn");
const referenceInfo = document.querySelector("#referenceInfo");
const elasticModulusInput = document.querySelector("#elasticModulusInput");
const plasticStrainStepInput = document.querySelector("#plasticStrainStep");
const plasticOutput = document.querySelector("#plasticOutput");
const savePlasticBtn = document.querySelector("#savePlasticBtn");
const powerYieldInput = document.querySelector("#powerYieldInput");
const powerModulusInput = document.querySelector("#powerModulusInput");
const powerUtsInput = document.querySelector("#powerUtsInput");
const powerCoeffInput = document.querySelector("#powerCoeffInput");
const powerExponentInput = document.querySelector("#powerExponentInput");
const powerPointsInput = document.querySelector("#powerPointsInput");
const powerSpacingInputs = document.querySelectorAll('input[name="powerSpacing"]');
const powerRowInput = document.querySelector("#powerRowInput");
const loadPowerRowBtn = document.querySelector("#loadPowerRowBtn");
const powerSummaryInputs = document.querySelector("#powerSummaryInputs");
const powerSummaryRange = document.querySelector("#powerSummaryRange");
const powerSummaryBadges = document.querySelector("#powerSummaryBadges");
const powerOutput = document.querySelector("#powerOutput");
const powerOutputStatus = document.querySelector("#powerOutputStatus");
const buildPowerBtn = document.querySelector("#buildPowerBtn");
const plotPowerBtn = document.querySelector("#plotPowerBtn");
const savePowerBtn = document.querySelector("#savePowerBtn");
const savePowerPlotBtn = document.querySelector("#savePowerPlotBtn");
const powerGrid = document.querySelector("#powerGrid");
const powerAxes = document.querySelector("#powerAxes");
const powerCurveStrain = document.querySelector("#powerCurveStrain");
const powerPoints = document.querySelector("#powerPoints");
const dataTableBody = document.querySelector("#dataTableBody");
const dataTableStatus = document.querySelector("#dataTableStatus");
const dataPlotSelect = document.querySelector("#dataPlotSelect");
const dataPlotFitSelect = document.querySelector("#dataPlotFitSelect");
const dataPlotStatus = document.querySelector("#dataPlotStatus");
const dataPlotGrid = document.querySelector("#dataPlotGrid");
const dataPlotAxes = document.querySelector("#dataPlotAxes");
const dataPlotCurve = document.querySelector("#dataPlotCurve");
const dataPlotFit = document.querySelector("#dataPlotFit");
const dataPlotOffset = document.querySelector("#dataPlotOffset");
const dataPlotPoints = document.querySelector("#dataPlotPoints");
const resetBtn = document.querySelector("#resetBtn");
const summaryBtn = document.querySelector("#summaryBtn");
const summaryRangeToggle = document.querySelector("#summaryRangeToggle");
const feedback = document.querySelector("#feedback");
const summary = document.querySelector("#summary");
const summaryPanel = document.querySelector("#summaryPanel");
const summaryOutput = document.querySelector("#summaryOutput");
const copySummaryBtn = document.querySelector("#copySummaryBtn");
const closeSummaryBtn = document.querySelector("#closeSummaryBtn");
if (summaryPanel) {
  summaryPanel.hidden = true;
}
const modulus = document.querySelector("#modulus");
const yieldPointText = document.querySelector("#yieldPointText");
const yieldPointTop = document.querySelector("#yieldPointTop");
const utsText = document.querySelector("#utsText");
const utsTop = document.querySelector("#utsTop");
const tangentText = document.querySelector("#tangentText");
const hardeningText = document.querySelector("#hardeningText");
const hardeningPanel = document.querySelector("#hardeningPanel");
const hardeningChartShell = document.querySelector("#hardeningChartShell");
const hardeningSummary = document.querySelector("#hardeningSummary");
const regionFitCubic = document.querySelector("#regionFitCubic");
const regionFitLine = document.querySelector("#regionFitLine");
const regionFitSelect = document.querySelector("#regionFitSelect");
const elasticSummary = document.querySelector("#elasticSummary");
const selectionStatus = document.querySelector("#selectionStatus");
const grid = document.querySelector("#grid");
const axes = document.querySelector("#axes");
const curve = document.querySelector("#curve");
const trueCurve = document.querySelector("#trueCurve");
const elasticLine = document.querySelector("#elastic");
const offsetLine = document.querySelector("#offsetLine");
const yieldPoint = document.querySelector("#yieldPoint");
const pointsLayer = document.querySelector("#points");
const elasticGrid = document.querySelector("#elasticGrid");
const elasticAxes = document.querySelector("#elasticAxes");
const elasticCurve = document.querySelector("#elasticCurve");
const elasticFit = document.querySelector("#elasticFit");
const elasticPointsLayer = document.querySelector("#elasticPoints");
const hardeningGrid = document.querySelector("#hardeningGrid");
const hardeningAxes = document.querySelector("#hardeningAxes");
const hardeningCurve = document.querySelector("#hardeningCurve");
const hardeningFit = document.querySelector("#hardeningFit");
const hardeningPointsLayer = document.querySelector("#hardeningPoints");
const plasticPanel = document.querySelector("#plasticPanel");
const plasticChartShell = document.querySelector("#plasticChartShell");
const plasticSummary = document.querySelector("#plasticSummary");
const plasticGrid = document.querySelector("#plasticGrid");
const plasticAxes = document.querySelector("#plasticAxes");
const plasticCurve = document.querySelector("#plasticCurve");
const plasticFit = document.querySelector("#plasticFit");
const plasticPointsLayer = document.querySelector("#plasticPoints");

const chartBox = {
  width: 640,
  height: 400,
  padding: 56,
};

const limits = {
  maxPoints: 20000,
  maxFileSize: 1000000,
};

const modulusConfig = {
  maxElasticStrain: 0.01,
  minWindow: 20,
  maxWindow: 80,
};

const selectionConfig = {
  minPoints: 10,
};

let elasticRangeOverride = null;
let elasticRangeAxis = null;
let elasticLineOverride = null;
let rawData = "";
let stressRangeActive = false;
let strainRangeActive = false;
let lineRangeActive = false;
let lastPopupMessage = "";
let hardeningWarningMode = "silent";
let referenceLoaded = false;
let regionFitMode = "default";
let lastAutoFillKey = null;
let lastPowerDataset = null;
let powerDatasetDirty = false;

const referenceDataset = {
  name: "Al2024-T351",
  unit: "MPa",
  path: "Al2024-T351.csv",
  hasHeader: true,
};

function normalizeRaw(raw) {
  const withoutDecorations = stripDecorations(raw);
  if (!shouldSkipHeader(withoutDecorations)) {
    return withoutDecorations;
  }

  const lines = withoutDecorations.split(/\r?\n/);
  const remaining = [];
  let skipped = false;
  for (const line of lines) {
    if (!skipped && line.trim().length > 0) {
      skipped = true;
      continue;
    }
    remaining.push(line);
  }

  return remaining.join("\n");
}

function shouldSkipHeader(raw) {
  if (hasHeaderCheckbox.checked) {
    return true;
  }
  return detectHeader(raw);
}

function detectHeader(raw) {
  const lines = stripDecorations(raw).split(/\r?\n/);
  let first = null;
  let second = null;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }
    if (!first) {
      first = trimmed;
      continue;
    }
    second = trimmed;
    break;
  }

  if (!first) {
    return false;
  }

  const firstStats = analyzeHeaderTokens(first);
  if (firstStats.numericCount >= 2 && !firstStats.hasNonNumeric) {
    return false;
  }

  if (!second) {
    return firstStats.hasNonNumeric;
  }

  const secondStats = analyzeHeaderTokens(second);
  if (secondStats.numericCount >= 2 && (firstStats.numericCount < 2 || firstStats.hasNonNumeric)) {
    return true;
  }

  return false;
}

function analyzeHeaderTokens(line) {
  const tokens = line.split(/[\s,\t]+/).filter(Boolean);
  let numericCount = 0;
  let hasNonNumeric = false;
  for (const token of tokens) {
    const value = Number(token);
    if (Number.isFinite(value)) {
      numericCount += 1;
    } else {
      hasNonNumeric = true;
    }
  }
  return { numericCount, hasNonNumeric };
}

function parseNumbers(raw) {
  const cleaned = normalizeRaw(raw);
  const tokens = cleaned
    .split(/[\s,\t]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  if (tokens.length === 0) {
    return { error: "Enter at least two coordinate pairs." };
  }

  if (tokens.length % 2 !== 0) {
    return { error: "Provide an even count of numbers: strain, stress pairs." };
  }

  const pairCount = tokens.length / 2;
  if (pairCount < 2) {
    return { error: "Enter at least two coordinate pairs." };
  }

  if (pairCount > limits.maxPoints) {
    return { error: `Limit reached: ${limits.maxPoints} points max.` };
  }

  const values = [];
  for (const token of tokens) {
    const value = Number(token);
    if (Number.isNaN(value)) {
      return { error: `"${token}" is not a number.` };
    }
    values.push(value);
  }

  const pairs = [];
  for (let i = 0; i < values.length; i += 2) {
    pairs.push({ x: values[i], y: values[i + 1] });
  }

  return { pairs };
}

function extent(values) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) {
    const pad = min === 0 ? 1 : Math.abs(min) * 0.1;
    return [min - pad, max + pad];
  }
  return [min, max];
}

function scale(value, domainMin, domainMax, rangeMin, rangeMax) {
  return (
    rangeMin +
    ((value - domainMin) / (domainMax - domainMin)) * (rangeMax - rangeMin)
  );
}

function findUtsIndex(pairs) {
  if (!pairs || pairs.length === 0) {
    return null;
  }
  let maxStress = -Infinity;
  let maxIndex = 0;
  for (let i = 0; i < pairs.length; i += 1) {
    const stress = pairs[i].y;
    if (stress > maxStress) {
      maxStress = stress;
      maxIndex = i;
    }
  }
  return maxIndex;
}

function computeTrueStrainStress(pair) {
  if (!pair || pair.x <= -1) {
    return { trueStrain: null, trueStress: null };
  }
  const trueStrain = Math.log1p(pair.x);
  const trueStress = pair.y * (1 + pair.x);
  if (!Number.isFinite(trueStrain) || !Number.isFinite(trueStress)) {
    return { trueStrain: null, trueStress: null };
  }
  return { trueStrain, trueStress };
}

function engineeringPairToTruePair(pair) {
  const { trueStrain, trueStress } = computeTrueStrainStress(pair);
  if (trueStrain === null || trueStress === null) {
    return null;
  }
  return { x: trueStrain, y: trueStress };
}

function clearChart() {
  grid.innerHTML = "";
  axes.innerHTML = "";
  pointsLayer.innerHTML = "";
  curve.setAttribute("points", "");
  trueCurve.setAttribute("points", "");
  elasticLine.setAttribute("points", "");
  offsetLine.setAttribute("points", "");
  yieldPoint.setAttribute("cx", "-999");
  yieldPoint.setAttribute("cy", "-999");
  yieldPoint.style.opacity = "0";
  elasticGrid.innerHTML = "";
  elasticAxes.innerHTML = "";
  elasticPointsLayer.innerHTML = "";
  elasticCurve.setAttribute("points", "");
  elasticFit.setAttribute("points", "");
  hardeningGrid.innerHTML = "";
  hardeningAxes.innerHTML = "";
  hardeningPointsLayer.innerHTML = "";
  hardeningCurve.setAttribute("points", "");
  hardeningFit.setAttribute("points", "");
  plasticGrid.innerHTML = "";
  plasticAxes.innerHTML = "";
  plasticPointsLayer.innerHTML = "";
  plasticCurve.setAttribute("points", "");
  plasticFit.setAttribute("points", "");
}

function clearPowerChart() {
  if (powerGrid) {
    powerGrid.innerHTML = "";
  }
  if (powerAxes) {
    powerAxes.innerHTML = "";
  }
  if (powerCurveStrain) {
    powerCurveStrain.setAttribute("points", "");
  }
  if (powerPoints) {
    powerPoints.innerHTML = "";
  }
}

function renderGrid(target, xTicks, yTicks, box) {
  const { width, height, padding } = box;
  const left = padding;
  const right = width - padding;
  const top = padding;
  const bottom = height - padding;

  for (let i = 0; i <= xTicks; i += 1) {
    const x = left + ((right - left) * i) / xTicks;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("x2", x);
    line.setAttribute("y1", top);
    line.setAttribute("y2", bottom);
    line.setAttribute("class", "tick");
    target.appendChild(line);
  }

  for (let j = 0; j <= yTicks; j += 1) {
    const y = top + ((bottom - top) * j) / yTicks;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", left);
    line.setAttribute("x2", right);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("class", "tick");
    target.appendChild(line);
  }
}

function renderAxes(target, xDomain, yDomain, xTicks, yTicks, box, labels) {
  const { width, height, padding } = box;
  const left = padding;
  const right = width - padding;
  const top = padding;
  const bottom = height - padding;

  const axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisX.setAttribute("x1", left);
  axisX.setAttribute("x2", right);
  axisX.setAttribute("y1", bottom);
  axisX.setAttribute("y2", bottom);
  axisX.setAttribute("class", "axis-line");
  target.appendChild(axisX);

  const axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisY.setAttribute("x1", left);
  axisY.setAttribute("x2", left);
  axisY.setAttribute("y1", top);
  axisY.setAttribute("y2", bottom);
  axisY.setAttribute("class", "axis-line");
  target.appendChild(axisY);

  for (let i = 0; i <= xTicks; i += 1) {
    const x = left + ((right - left) * i) / xTicks;
    const value = xDomain[0] + ((xDomain[1] - xDomain[0]) * i) / xTicks;
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", x);
    label.setAttribute("y", bottom + 18);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "tick-label");
    label.textContent = formatTick(value, xDomain);
    target.appendChild(label);
  }

  for (let j = 0; j <= yTicks; j += 1) {
    const y = bottom - ((bottom - top) * j) / yTicks;
    const value = yDomain[0] + ((yDomain[1] - yDomain[0]) * j) / yTicks;
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", left - 12);
    label.setAttribute("y", y + 4);
    label.setAttribute("text-anchor", "end");
    label.setAttribute("class", "tick-label");
    label.textContent = formatTick(value, yDomain);
    target.appendChild(label);
  }

  const xLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
  xLabel.setAttribute("x", (left + right) / 2);
  xLabel.setAttribute("y", height - 12);
  xLabel.setAttribute("text-anchor", "middle");
  xLabel.setAttribute("class", "tick-label");
  xLabel.textContent = labels.x;
  target.appendChild(xLabel);

  const yLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
  yLabel.setAttribute("x", 18);
  yLabel.setAttribute("y", (top + bottom) / 2);
  yLabel.setAttribute("text-anchor", "middle");
  yLabel.setAttribute("class", "tick-label");
  yLabel.setAttribute("transform", `rotate(-90 18 ${(top + bottom) / 2})`);
  yLabel.textContent = labels.y;
  target.appendChild(yLabel);
}

function formatTick(value, domain) {
  const span = Math.abs(domain[1] - domain[0]);
  if (span >= 100) {
    return value.toFixed(0);
  }
  if (span >= 10) {
    return value.toFixed(1);
  }
  if (span >= 1) {
    return value.toFixed(2);
  }
  if (span >= 0.1) {
    return value.toFixed(3);
  }
  if (span >= 0.01) {
    return value.toFixed(4);
  }
  if (span >= 0.001) {
    return value.toFixed(5);
  }
  if (span >= 0.0001) {
    return value.toFixed(6);
  }
  return value.toPrecision(3);
}

function renderPoints(pairs, xDomain, yDomain, box) {
  const { width, height, padding } = box;
  const left = padding;
  const right = width - padding;
  const top = padding;
  const bottom = height - padding;

  return pairs.map((pair) => {
    const x = scale(pair.x, xDomain[0], xDomain[1], left, right);
    const y = scale(pair.y, yDomain[0], yDomain[1], bottom, top);
    return { x, y };
  });
}

function renderChart(pairs, overridePairs, shouldAutoFill) {
  clearChart();

  const source = rawData || stripDecorations(input.value);
  const baseModulus = estimateYoungsModulus(pairs);
  const regionFit = overridePairs ? buildRegionFit(overridePairs) : baseModulus;
  const stressUnit = stressUnitSelect.value;
  const showTrue = showTrueCheckbox.checked;
  const truePairs = showTrue ? computeTruePairs(pairs) : [];
  const truePlasticPairs = getTruePlasticPairs(pairs, baseModulus);
  let elasticModulus = null;
  let plasticStrainStep = null;
  const hardeningPairs = overridePairs || pairs;
  let yieldResult = null;

  const xValues = showTrue
    ? pairs.map((pair) => pair.x).concat(truePairs.map((pair) => pair.x))
    : pairs.map((pair) => pair.x);
  const yValues = showTrue
    ? pairs.map((pair) => pair.y).concat(truePairs.map((pair) => pair.y))
    : pairs.map((pair) => pair.y);
  const xDomain = extent(xValues);
  const yDomain = extent(yValues);
  const xTicks = 4;
  const yTicks = 4;

  renderGrid(grid, xTicks, yTicks, chartBox);
  renderAxes(axes, xDomain, yDomain, xTicks, yTicks, chartBox, {
    x: "Strain",
    y: `Stress (${stressUnit})`,
  });
  summary.textContent = `${pairs.length} points | Strain ${xDomain[0].toFixed(2)}-${xDomain[1].toFixed(2)} | Stress ${yDomain[0].toFixed(2)}-${yDomain[1].toFixed(2)}`;

  const scaled = renderPoints(pairs, xDomain, yDomain, chartBox);
  const points = scaled.map((point) => `${point.x},${point.y}`).join(" ");
  curve.setAttribute("points", points);

  if (showTrue && truePairs.length > 1) {
    const trueScaled = renderPoints(truePairs, xDomain, yDomain, chartBox);
    const truePoints = trueScaled.map((point) => `${point.x},${point.y}`).join(" ");
    trueCurve.setAttribute("points", truePoints);
  } else {
    trueCurve.setAttribute("points", "");
  }


  const metrics = computeMetrics(pairs, baseModulus);
  const hardening = baseModulus
    ? estimatePowerHardening(hardeningPairs, baseModulus)
    : null;

  if (baseModulus) {
    const elasticScaled = renderPoints(baseModulus.pairs, xDomain, yDomain, chartBox);
    const elasticPoints = elasticScaled
      .map((point) => `${point.x},${point.y}`)
      .join(" ");
    elasticLine.setAttribute("points", elasticPoints);
    const offsetPoints = [
      { x: xDomain[0], y: baseModulus.slope * (xDomain[0] - 0.002) },
      { x: xDomain[1], y: baseModulus.slope * (xDomain[1] - 0.002) },
    ];
    const offsetScaled = renderPoints(offsetPoints, xDomain, yDomain, chartBox);
    offsetLine.setAttribute(
      "points",
      offsetScaled.map((point) => `${point.x},${point.y}`).join(" "),
    );
    modulus.textContent = `Young's Modulus: ${baseModulus.slope.toFixed(2)} ${stressUnit}`;
    yieldResult = estimateOffsetYield(pairs, baseModulus);
    if (yieldResult) {
      const scaledYield = renderPoints([yieldResult], xDomain, yDomain, chartBox)[0];
      yieldPoint.setAttribute("cx", scaledYield.x);
      yieldPoint.setAttribute("cy", scaledYield.y);
      yieldPoint.style.opacity = "1";
      const yieldLabel = `Yield (0.2%): ${yieldResult.y.toFixed(2)} ${stressUnit} @ ${yieldResult.x.toFixed(4)}`;
      yieldPointText.textContent = yieldLabel;
      yieldPointTop.textContent = yieldLabel;
    } else {
      yieldPoint.style.opacity = "0";
      yieldPointText.textContent = "Yield (0.2%): --";
      yieldPointTop.textContent = "Yield (0.2%): --";
    }
  } else {
    elasticLine.setAttribute("points", "");
    offsetLine.setAttribute("points", "");
    modulus.textContent = "Young's Modulus: --";
    yieldPoint.style.opacity = "0";
    yieldPointText.textContent = "Yield (0.2%): --";
    yieldPointTop.textContent = "Yield (0.2%): --";
  }

  autoFillInputs(pairs, baseModulus, shouldAutoFill);
  elasticModulus = readElasticModulus();
  plasticStrainStep = readPlasticStrainStep(false);
  const hardeningAllowed =
    baseModulus &&
    yieldResult &&
    minStress(hardeningPairs) > yieldResult.y;
  if (regionFit) {
    const fitModel = regionFitSelect ? regionFitSelect.value : "linear";
    renderElasticChart(
      regionFit,
      regionFitMode === "plastic",
      regionFitMode === "plastic" ? truePlasticPairs : null,
      fitModel,
    );
  } else {
    elasticSummary.textContent = "Awaiting fit segment...";
  }

  if (metrics) {
    const utsLabel = `UTS: ${metrics.uts.toFixed(2)} ${stressUnit}`;
    utsText.textContent = utsLabel;
    utsTop.textContent = utsLabel;
    if (metrics.tangentModulus !== null) {
      tangentText.textContent = `Tangent modulus: ${metrics.tangentModulus.toFixed(2)} ${stressUnit}`;
    } else {
      tangentText.textContent = "Tangent modulus: --";
    }
  } else {
    utsText.textContent = "UTS: --";
    utsTop.textContent = "UTS: --";
    tangentText.textContent = "Tangent modulus: --";
  }

  if (hardeningAllowed && hardening && hardening.K !== null && hardening.n !== null) {
    hardeningText.textContent = `Power hardening: K=${hardening.K.toFixed(2)} ${stressUnit}, n=${hardening.n.toFixed(3)} (R2 ${hardening.r2.toFixed(4)}, ${hardening.count} pts)`;
  } else {
    hardeningText.textContent = "Power hardening: --";
  }

  if (hardeningAllowed && hardening && hardening.logPairs && hardening.logPairs.length > 1) {
    hardeningPanel.style.display = "block";
    hardeningChartShell.style.display = "block";
    renderHardeningChart(hardening.logPairs, hardening.fit);
    hardeningSummary.textContent = `Log-log fit: R2 ${hardening.r2.toFixed(4)} | ${hardening.count} pts`;
  } else {
    hardeningPanel.style.display = "none";
    hardeningChartShell.style.display = "none";
    hardeningSummary.textContent = "Awaiting plastic range...";
    hardeningGrid.innerHTML = "";
    hardeningAxes.innerHTML = "";
    hardeningPointsLayer.innerHTML = "";
    hardeningCurve.setAttribute("points", "");
    hardeningFit.setAttribute("points", "");
  }

  if (regionFitMode === "plastic") {
    if (elasticModulus.error) {
      plasticOutput.value = "";
      setFeedback(elasticModulus.error);
    } else if (plasticStrainStep.error) {
      plasticOutput.value = "";
      if (document.activeElement !== plasticStrainStepInput) {
        setFeedback(plasticStrainStep.error);
      }
    } else if (!elasticModulus.value) {
      plasticOutput.value = "Enter E to compute plastic strain.";
    } else if (truePlasticPairs.length === 0) {
      plasticOutput.value = "Plastic region data not available.";
    } else {
      const cubic = cubicFit(truePlasticPairs);
      if (!cubic) {
        plasticOutput.value = "Unable to fit cubic to plastic region data.";
      } else {
        const yieldTrue = yieldResult ? engineeringPairToTruePair(yieldResult) : null;
        plasticOutput.value = buildPlasticOutput(
          truePlasticPairs,
          elasticModulus.value,
          stressUnit,
          cubic,
          yieldTrue ? yieldTrue.x : null,
          yieldTrue ? yieldTrue.y : null,
          plasticStrainStep.value,
        );
      }
    }
  } else {
    plasticOutput.value = "";
  }

  const plasticData = parsePlasticColumns(source);
  if (plasticData && plasticData.fit) {
    plasticPanel.style.display = "block";
    plasticChartShell.style.display = "block";
    renderPlasticChart(plasticData.pairs, plasticData.fit);
    plasticSummary.textContent = `Fit: y=${plasticData.fit.a.toFixed(2)}x^3 ${formatSigned(plasticData.fit.b)}x^2 ${formatSigned(plasticData.fit.c)}x ${formatSigned(plasticData.fit.d)} | R2 ${plasticData.fit.r2.toFixed(5)} | ${plasticData.pairs.length} pts`;
  } else {
    plasticPanel.style.display = "none";
    plasticChartShell.style.display = "none";
    plasticSummary.textContent = "Awaiting plastic region data...";
    plasticGrid.innerHTML = "";
    plasticAxes.innerHTML = "";
    plasticPointsLayer.innerHTML = "";
    plasticCurve.setAttribute("points", "");
    plasticFit.setAttribute("points", "");
  }

  if (hardening && hardening.warning && hardeningWarningMode === "popup") {
    setFeedback(hardening.warning);
    hardeningWarningMode = "silent";
  }

  try {
    const pathLength = curve.getTotalLength();
    curve.style.strokeDasharray = pathLength;
    curve.style.strokeDashoffset = pathLength;
    curve.getBoundingClientRect();
    curve.style.animation = "draw 1.6s ease forwards";
  } catch (error) {
    // Skip animation if the SVG path is not ready yet.
  }

  const utsIndex = metrics ? findUtsIndex(pairs) : null;

  scaled.forEach((point, index) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
    circle.setAttribute("r", 2.5);
    circle.setAttribute("class", "point");
    if (utsIndex !== null && index > utsIndex) {
      circle.classList.add("post-uts");
    }
    pointsLayer.appendChild(circle);
  });
  const svg = curve.ownerSVGElement;
  if (svg) {
    svg.insertBefore(pointsLayer, curve);
    if (showTrue && truePairs.length > 1) {
      svg.appendChild(trueCurve);
    }
    svg.appendChild(yieldPoint);
  }

}

function estimateOffsetYield(pairs, fit) {
  if (!fit || !Number.isFinite(fit.slope) || !Number.isFinite(fit.intercept)) {
    return null;
  }

  const sorted = [...pairs].sort((a, b) => a.x - b.x);
  if (sorted.length < 2) {
    return null;
  }

  const offset = 0.002;
  let prev = sorted[0];
  let prevDiff = prev.y - fit.slope * (prev.x - offset);

  for (let i = 1; i < sorted.length; i += 1) {
    const current = sorted[i];
    const currentDiff = current.y - fit.slope * (current.x - offset);

    if (
      prevDiff === 0 ||
      currentDiff === 0 ||
      (prevDiff < 0 && currentDiff > 0) ||
      (prevDiff > 0 && currentDiff < 0)
    ) {
      const span = currentDiff - prevDiff;
      const t = span === 0 ? 0 : (0 - prevDiff) / span;
      return {
        x: prev.x + t * (current.x - prev.x),
        y: prev.y + t * (current.y - prev.y),
      };
    }

    prev = current;
    prevDiff = currentDiff;
  }

  return null;
}

function computeTruePairs(pairs) {
  if (pairs.length === 0) {
    return [];
  }
  const utsIndex = findUtsIndex(pairs);
  if (utsIndex === null) {
    return [];
  }
  return pairs
    .slice(0, utsIndex + 1)
    .map(engineeringPairToTruePair)
    .filter(Boolean);
}

function getTruePlasticPairs(pairs, modulusResult) {
  if (!modulusResult || pairs.length === 0) {
    return [];
  }
  const yieldPoint = estimateOffsetYield(pairs, modulusResult);
  if (!yieldPoint) {
    return [];
  }
  const utsIndex = findUtsIndex(pairs);
  if (utsIndex === null) {
    return [];
  }
  return pairs
    .slice(0, utsIndex + 1)
    .filter((pair) => pair.x >= yieldPoint.x)
    .map(engineeringPairToTruePair)
    .filter(Boolean);
}

function computeMetrics(pairs, fit) {
  const sorted = [...pairs].sort((a, b) => a.x - b.x);
  if (sorted.length < 2) {
    return null;
  }

  let toughness = 0;
  for (let i = 1; i < sorted.length; i += 1) {
    const dx = sorted[i].x - sorted[i - 1].x;
    toughness += dx * (sorted[i].y + sorted[i - 1].y) / 2;
  }

  const utsPair = sorted.reduce((max, pair) => (pair.y > max.y ? pair : max), sorted[0]);
  const uts = utsPair.y;
  const fracture = sorted[sorted.length - 1];

  let yieldPoint = null;
  let resilience = null;
  let tangentModulus = null;
  if (fit) {
    yieldPoint = estimateOffsetYield(sorted, fit);
    if (yieldPoint) {
      if (utsPair && utsPair.x > yieldPoint.x) {
        tangentModulus = (utsPair.y - yieldPoint.y) / (utsPair.x - yieldPoint.x);
      }
      let area = 0;
      for (let i = 1; i < sorted.length; i += 1) {
        const left = sorted[i - 1];
        const right = sorted[i];
        if (right.x <= yieldPoint.x) {
          const dx = right.x - left.x;
          area += dx * (left.y + right.y) / 2;
        } else if (left.x < yieldPoint.x) {
          const t = (yieldPoint.x - left.x) / (right.x - left.x);
          const interpY = left.y + t * (right.y - left.y);
          const dx = yieldPoint.x - left.x;
          area += dx * (left.y + interpY) / 2;
          break;
        } else {
          break;
        }
      }
      resilience = area;
    }
  }

  return {
    uts,
    utsStrain: utsPair.x,
    fracture,
    toughness,
    resilience,
    yieldPoint,
    tangentModulus,
  };
}

function buildRegionFit(pairs) {
  const fit = linearRegression(pairs);
  if (!fit) {
    return null;
  }
  return { ...fit, pairs, mode: "manual" };
}

function estimatePowerHardening(pairs, modulusResult) {
  if (!modulusResult || !Number.isFinite(modulusResult.slope) || modulusResult.slope === 0) {
    return null;
  }

  const elasticModulus = modulusResult.slope;
  const logPairs = [];
  let validCount = 0;
  let plasticCount = 0;

  for (const pair of pairs) {
    const { trueStrain, trueStress } = computeTrueStrainStress(pair);
    if (trueStrain === null || trueStress === null) {
      continue;
    }
    if (trueStrain <= 0 || trueStress <= 0) {
      continue;
    }
    validCount += 1;
    const elasticStrain = trueStress / elasticModulus;
    const plasticStrain = trueStrain - elasticStrain;
    if (plasticStrain <= 0) {
      continue;
    }
    plasticCount += 1;
    logPairs.push({ x: Math.log(plasticStrain), y: Math.log(trueStress) });
  }

  if (logPairs.length < 2) {
    return {
      K: null,
      n: null,
      warning:
        "Power hardening needs plastic-region data. Select a range beyond yield for K and n.",
    };
  }

  const fit = linearRegression(logPairs);
  if (!fit) {
    return null;
  }

  const plasticRatio = validCount === 0 ? 0 : plasticCount / validCount;
  const warning =
    plasticCount < selectionConfig.minPoints || plasticRatio < 0.6
      ? "Power hardening fit uses mostly elastic data. Select a plastic region for realistic K and n."
      : "";

  return {
    K: Math.exp(fit.intercept),
    n: fit.slope,
    r2: fit.r2,
    count: logPairs.length,
    logPairs,
    fit,
    plasticRatio,
    warning,
  };
}

function renderElasticChart(modulusResult, useTrueData, truePairs, fitModel) {
  const stressUnit = stressUnitSelect.value;
  const elasticPairs = modulusResult.pairs;
  const useTruePlastic = useTrueData && truePairs && truePairs.length > 0;
  const plotPairs = useTruePlastic ? truePairs : elasticPairs;
  let fitR2 = null;
  const xDomain = extent(plotPairs.map((pair) => pair.x));
  const yDomain = extent(plotPairs.map((pair) => pair.y));
  if (fitModel === "cubic" || fitModel === "quadratic") {
    yDomain[0] = 0;
  }
  const xTicks = 4;
  const yTicks = 4;

  renderGrid(elasticGrid, xTicks, yTicks, chartBox);
  renderAxes(elasticAxes, xDomain, yDomain, xTicks, yTicks, chartBox, {
    x: useTruePlastic ? "True strain" : "Strain",
    y: useTruePlastic ? `True stress (${stressUnit})` : `Stress (${stressUnit})`,
  });

  const xMin = xDomain[0];
  const xMax = xDomain[1];
  const yMin = yDomain[0];
  const yMax = yDomain[1];
  const rangeHint = `Range: strain ${xMin.toFixed(6)}-${xMax.toFixed(6)}, stress ${yMin.toFixed(2)}-${yMax.toFixed(2)} ${stressUnit} (${plotPairs.length} pts)`;
  regionFitLine.setAttribute("title", rangeHint);

  const scaled = renderPoints(plotPairs, xDomain, yDomain, chartBox);
  const points = scaled.map((point) => `${point.x},${point.y}`).join(" ");
  elasticCurve.setAttribute("points", points);
  if (useTruePlastic) {
    elasticCurve.style.stroke = "#c0392b";
    elasticCurve.style.strokeWidth = "2.5";
  } else {
    elasticCurve.style.stroke = "";
    elasticCurve.style.strokeWidth = "";
  }

  scaled.forEach((point) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
    circle.setAttribute("r", 4.5);
    circle.setAttribute("class", "point");
    if (useTruePlastic) {
      circle.style.fill = "none";
      circle.style.stroke = "#1f6fb2";
      circle.style.strokeWidth = "2";
    }
    elasticPointsLayer.appendChild(circle);
  });

  const elasticSvg = elasticCurve.ownerSVGElement;
  if (elasticSvg) {
    elasticSvg.insertBefore(elasticPointsLayer, elasticCurve);
  }

  const fitResult = buildRegressionFit(plotPairs, fitModel);
  if (fitResult && fitResult.fitPoints && fitResult.fitPoints.length > 0) {
    fitR2 = fitResult.r2;
    elasticFit.setAttribute("stroke", "#1d1a12");
    elasticFit.setAttribute("stroke-width", "2.5");
    elasticFit.setAttribute("stroke-dasharray", "none");
    const fitScaled = renderPoints(fitResult.fitPoints, xDomain, yDomain, chartBox);
    const fitLine = fitScaled.map((point) => `${point.x},${point.y}`).join(" ");
    elasticFit.setAttribute("points", fitLine);
    regionFitLine.textContent = fitResult.label;
    regionFitCubic.textContent =
      fitResult.r2 === null ? "R2: --" : `R2: ${fitResult.r2.toFixed(5)}`;

    if (fitModel === "cubic" && useTruePlastic && fitResult.coeffs) {
      const markerPairs = plotPairs.map((pair) => ({
        x: pair.x,
        y:
          fitResult.coeffs.a * pair.x ** 3 +
          fitResult.coeffs.b * pair.x ** 2 +
          fitResult.coeffs.c * pair.x +
          fitResult.coeffs.d,
      }));
      const markerScaled = renderPoints(markerPairs, xDomain, yDomain, chartBox);
      markerScaled.forEach((point) => {
        const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        square.setAttribute("x", point.x - 3);
        square.setAttribute("y", point.y - 3);
        square.setAttribute("width", 6);
        square.setAttribute("height", 6);
        square.style.fill = "#c0392b";
        square.style.stroke = "#c0392b";
        elasticPointsLayer.appendChild(square);
      });
    }
  } else {
    elasticFit.setAttribute("points", "");
    regionFitLine.textContent =
      fitResult && fitResult.label ? fitResult.label : "Regression: --";
    regionFitCubic.textContent =
      fitResult && fitResult.error ? fitResult.error : "R2: --";
  }

  const modeLabel =
    modulusResult.mode === "manual"
      ? "manual"
      : modulusResult.mode === "fallback"
      ? "fallback"
      : modulusResult.mode === "prefix"
      ? "prefix"
      : "auto";
  if (fitR2 !== null) {
    const fitLabel = useTruePlastic ? "plastic" : modeLabel;
    elasticSummary.textContent = `Fit window: ${plotPairs.length} points | R2 ${fitR2.toFixed(4)} | ${fitLabel}`;
  } else {
    elasticSummary.textContent = `Fit window: ${elasticPairs.length} points | R2 ${modulusResult.r2.toFixed(4)} | ${modeLabel}`;
  }
}

function renderHardeningChart(logPairs, fit) {
  hardeningGrid.innerHTML = "";
  hardeningAxes.innerHTML = "";
  hardeningPointsLayer.innerHTML = "";
  hardeningCurve.setAttribute("points", "");
  hardeningFit.setAttribute("points", "");

  const xDomain = extent(logPairs.map((pair) => pair.x));
  const yDomain = extent(logPairs.map((pair) => pair.y));
  const xTicks = 4;
  const yTicks = 4;

  renderGrid(hardeningGrid, xTicks, yTicks, chartBox);
  renderAxes(hardeningAxes, xDomain, yDomain, xTicks, yTicks, chartBox, {
    x: "ln(ep)",
    y: "ln(sigma_true)",
  });

  const scaled = renderPoints(logPairs, xDomain, yDomain, chartBox);
  const points = scaled.map((point) => `${point.x},${point.y}`).join(" ");
  hardeningCurve.setAttribute("points", points);

  scaled.forEach((point) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
    circle.setAttribute("r", 4);
    circle.setAttribute("class", "point");
    hardeningPointsLayer.appendChild(circle);
  });

  if (fit) {
    const minX = xDomain[0];
    const maxX = xDomain[1];
    const fitPoints = [
      { x: minX, y: fit.slope * minX + fit.intercept },
      { x: maxX, y: fit.slope * maxX + fit.intercept },
    ];
    const fitScaled = renderPoints(fitPoints, xDomain, yDomain, chartBox);
    const fitLine = fitScaled.map((point) => `${point.x},${point.y}`).join(" ");
    hardeningFit.setAttribute("points", fitLine);
  }
}

function parsePlasticColumns(raw) {
  if (!raw || raw.trim().length === 0) {
    return null;
  }
  const lines = raw.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length < 2) {
    return null;
  }
  const header = splitColumns(lines[0]);
  const headerLower = header.map((col) => col.toLowerCase());
  const xKey = "true strain in plastic region (mm/mm)";
  const yKey = "true stress in plastic region (mpa)";
  const xIndex = headerLower.indexOf(xKey);
  const yIndex = headerLower.indexOf(yKey);
  if (xIndex === -1 || yIndex === -1) {
    return null;
  }

  const pairs = [];
  for (let i = 1; i < lines.length; i += 1) {
    const parts = splitColumns(lines[i]);
    if (xIndex >= parts.length || yIndex >= parts.length) {
      continue;
    }
    const x = Number(parts[xIndex]);
    const y = Number(parts[yIndex]);
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      continue;
    }
    pairs.push({ x, y });
  }

  if (pairs.length < 4) {
    return null;
  }

  const fit = cubicFit(pairs);
  if (!fit) {
    return null;
  }

  return { pairs, fit };
}

function splitColumns(line) {
  return line
    .replace(/\t/g, ",")
    .split(",")
    .map((item) => item.trim());
}

function cubicFit(pairs) {
  const n = pairs.length;
  if (n < 4) {
    return null;
  }

  let sx = 0;
  let sx2 = 0;
  let sx3 = 0;
  let sx4 = 0;
  let sx5 = 0;
  let sx6 = 0;
  let sy = 0;
  let sxy = 0;
  let sx2y = 0;
  let sx3y = 0;

  for (const pair of pairs) {
    const x = pair.x;
    const y = pair.y;
    const x2 = x * x;
    const x3 = x2 * x;
    const x4 = x3 * x;
    const x5 = x4 * x;
    const x6 = x5 * x;
    sx += x;
    sx2 += x2;
    sx3 += x3;
    sx4 += x4;
    sx5 += x5;
    sx6 += x6;
    sy += y;
    sxy += x * y;
    sx2y += x2 * y;
    sx3y += x3 * y;
  }

  const matrix = [
    [sx6, sx5, sx4, sx3, sx3y],
    [sx5, sx4, sx3, sx2, sx2y],
    [sx4, sx3, sx2, sx, sxy],
    [sx3, sx2, sx, n, sy],
  ];

  for (let i = 0; i < 4; i += 1) {
    let pivot = matrix[i][i];
    if (pivot === 0) {
      for (let j = i + 1; j < 4; j += 1) {
        if (matrix[j][i] !== 0) {
          const temp = matrix[i];
          matrix[i] = matrix[j];
          matrix[j] = temp;
          pivot = matrix[i][i];
          break;
        }
      }
    }
    if (pivot === 0) {
      return null;
    }
    for (let k = i; k < 5; k += 1) {
      matrix[i][k] /= pivot;
    }
    for (let j = i + 1; j < 4; j += 1) {
      const factor = matrix[j][i];
      for (let k = i; k < 5; k += 1) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }

  const coeffs = [0, 0, 0, 0];
  for (let i = 3; i >= 0; i -= 1) {
    let value = matrix[i][4];
    for (let j = i + 1; j < 4; j += 1) {
      value -= matrix[i][j] * coeffs[j];
    }
    coeffs[i] = value;
  }

  const [a, b, c, d] = coeffs;
  const meanY = sy / n;
  let ssTot = 0;
  let ssRes = 0;

  for (const pair of pairs) {
    const y = pair.y;
    const yhat = a * pair.x ** 3 + b * pair.x ** 2 + c * pair.x + d;
    ssTot += (y - meanY) ** 2;
    ssRes += (y - yhat) ** 2;
  }

  const r2 = ssTot === 0 ? 0 : 1 - ssRes / ssTot;
  return { a, b, c, d, r2 };
}

function quadraticFit(pairs) {
  const n = pairs.length;
  if (n < 3) {
    return null;
  }

  let sx = 0;
  let sx2 = 0;
  let sx3 = 0;
  let sx4 = 0;
  let sy = 0;
  let sxy = 0;
  let sx2y = 0;

  for (const pair of pairs) {
    const x = pair.x;
    const y = pair.y;
    const x2 = x * x;
    const x3 = x2 * x;
    const x4 = x3 * x;
    sx += x;
    sx2 += x2;
    sx3 += x3;
    sx4 += x4;
    sy += y;
    sxy += x * y;
    sx2y += x2 * y;
  }

  const matrix = [
    [sx4, sx3, sx2, sx2y],
    [sx3, sx2, sx, sxy],
    [sx2, sx, n, sy],
  ];

  for (let i = 0; i < 3; i += 1) {
    let pivot = matrix[i][i];
    if (pivot === 0) {
      for (let j = i + 1; j < 3; j += 1) {
        if (matrix[j][i] !== 0) {
          const temp = matrix[i];
          matrix[i] = matrix[j];
          matrix[j] = temp;
          pivot = matrix[i][i];
          break;
        }
      }
    }
    if (pivot === 0) {
      return null;
    }
    for (let k = i; k < 4; k += 1) {
      matrix[i][k] /= pivot;
    }
    for (let j = i + 1; j < 3; j += 1) {
      const factor = matrix[j][i];
      for (let k = i; k < 4; k += 1) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }

  const coeffs = [0, 0, 0];
  for (let i = 2; i >= 0; i -= 1) {
    let value = matrix[i][3];
    for (let j = i + 1; j < 3; j += 1) {
      value -= matrix[i][j] * coeffs[j];
    }
    coeffs[i] = value;
  }

  const [a, b, c] = coeffs;
  const meanY = sy / n;
  let ssTot = 0;
  let ssRes = 0;

  for (const pair of pairs) {
    const y = pair.y;
    const yhat = a * pair.x ** 2 + b * pair.x + c;
    ssTot += (y - meanY) ** 2;
    ssRes += (y - yhat) ** 2;
  }

  const r2 = ssTot === 0 ? 0 : 1 - ssRes / ssTot;
  return { a, b, c, r2 };
}

function exponentialFit(pairs) {
  const filtered = pairs.filter((pair) => pair.y > 0);
  if (filtered.length < 2) {
    return null;
  }
  const logPairs = filtered.map((pair) => ({
    x: pair.x,
    y: Math.log(pair.y),
  }));
  const fit = linearRegression(logPairs);
  if (!fit) {
    return null;
  }

  const a = Math.exp(fit.intercept);
  const b = fit.slope;
  const meanY = filtered.reduce((sum, pair) => sum + pair.y, 0) / filtered.length;
  let ssTot = 0;
  let ssRes = 0;

  for (const pair of filtered) {
    const predicted = a * Math.exp(b * pair.x);
    ssTot += (pair.y - meanY) ** 2;
    ssRes += (pair.y - predicted) ** 2;
  }

  const r2 = ssTot === 0 ? 0 : 1 - ssRes / ssTot;
  return { a, b, r2 };
}

function buildRegressionFit(pairs, model) {
  if (!pairs || pairs.length < 2) {
    return { error: "Regression: --" };
  }
  if (model === "none") {
    return { label: "Regression: --", r2: null, fitPoints: [] };
  }
  const minX = Math.min(...pairs.map((pair) => pair.x));
  const maxX = Math.max(...pairs.map((pair) => pair.x));
  const steps = 60;
  const fitPoints = [];

  if (model === "quadratic") {
    const fit = quadraticFit(pairs);
    if (!fit) {
      return { error: "Quadratic fit unavailable." };
    }
    for (let i = 0; i <= steps; i += 1) {
      const x = minX + ((maxX - minX) * i) / steps;
      fitPoints.push({ x, y: fit.a * x ** 2 + fit.b * x + fit.c });
    }
    return {
      label: `Regression: y=${fit.a.toFixed(2)}x^2 ${formatSigned(fit.b)}x ${formatSigned(fit.c)}`,
      r2: fit.r2,
      fitPoints,
      coeffs: fit,
    };
  }

  if (model === "cubic") {
    const fit = cubicFit(pairs);
    if (!fit) {
      return { error: "Cubic fit unavailable." };
    }
    for (let i = 0; i <= steps; i += 1) {
      const x = minX + ((maxX - minX) * i) / steps;
      fitPoints.push({
        x,
        y: fit.a * x ** 3 + fit.b * x ** 2 + fit.c * x + fit.d,
      });
    }
    return {
      label: `Regression: y=${fit.a.toFixed(2)}x^3 ${formatSigned(fit.b)}x^2 ${formatSigned(fit.c)}x ${formatSigned(fit.d)}`,
      r2: fit.r2,
      fitPoints,
      coeffs: fit,
    };
  }

  if (model === "exponential") {
    const fit = exponentialFit(pairs);
    if (!fit) {
      return { error: "Exponential fit requires positive stress." };
    }
    for (let i = 0; i <= steps; i += 1) {
      const x = minX + ((maxX - minX) * i) / steps;
      fitPoints.push({ x, y: fit.a * Math.exp(fit.b * x) });
    }
    return {
      label: `Regression: y=${fit.a.toFixed(2)}e^(${fit.b.toFixed(2)}x)`,
      r2: fit.r2,
      fitPoints,
      coeffs: fit,
    };
  }

  const fit = linearRegression(pairs);
  if (!fit) {
    return { error: "Linear fit unavailable." };
  }
  fitPoints.push(
    { x: minX, y: fit.slope * minX + fit.intercept },
    { x: maxX, y: fit.slope * maxX + fit.intercept },
  );
  return {
    label: `Regression: y=${fit.slope.toFixed(2)}x ${formatSigned(fit.intercept)}`,
    r2: fit.r2,
    fitPoints,
    coeffs: fit,
  };
}

function renderPlasticChart(pairs, fit) {
  plasticGrid.innerHTML = "";
  plasticAxes.innerHTML = "";
  plasticPointsLayer.innerHTML = "";
  plasticCurve.setAttribute("points", "");
  plasticFit.setAttribute("points", "");

  const xDomain = extent(pairs.map((pair) => pair.x));
  const yDomain = extent(pairs.map((pair) => pair.y));
  const xTicks = 4;
  const yTicks = 4;

  renderGrid(plasticGrid, xTicks, yTicks, chartBox);
  renderAxes(plasticAxes, xDomain, yDomain, xTicks, yTicks, chartBox, {
    x: "True plastic strain",
    y: "True plastic stress (MPa)",
  });

  const scaled = renderPoints(pairs, xDomain, yDomain, chartBox);
  const points = scaled.map((point) => `${point.x},${point.y}`).join(" ");
  plasticCurve.setAttribute("points", points);

  scaled.forEach((point) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
    circle.setAttribute("r", 4);
    circle.setAttribute("class", "point");
    plasticPointsLayer.appendChild(circle);
  });

  const minX = xDomain[0];
  const maxX = xDomain[1];
  const fitPoints = [];
  const steps = 60;
  for (let i = 0; i <= steps; i += 1) {
    const x = minX + ((maxX - minX) * i) / steps;
    const y = fit.a * x ** 3 + fit.b * x ** 2 + fit.c * x + fit.d;
    fitPoints.push({ x, y });
  }
  const fitScaled = renderPoints(fitPoints, xDomain, yDomain, chartBox);
  const fitLine = fitScaled.map((point) => `${point.x},${point.y}`).join(" ");
  plasticFit.setAttribute("points", fitLine);
}

function formatSigned(value) {
  const sign = value >= 0 ? "+" : "-";
  return `${sign}${Math.abs(value).toFixed(2)}`;
}

function estimateYoungsModulus(pairs, overridePairs) {
  if (overridePairs) {
    const fit = linearRegression(overridePairs);
    if (!fit) {
      return null;
    }
    return { ...fit, pairs: overridePairs };
  }

  const sorted = [...pairs].sort((a, b) => a.x - b.x);
  const maxStrain = modulusConfig.maxElasticStrain;
  let elastic = sorted.filter((pair) => pair.x >= 0 && pair.x <= maxStrain);

  if (elastic.length < modulusConfig.minWindow) {
    const expanded = sorted.filter((pair) => pair.x >= 0 && pair.x <= maxStrain * 3);
    if (expanded.length >= modulusConfig.minWindow) {
      elastic = expanded;
    }
  }

  if (elastic.length < modulusConfig.minWindow) {
    return null;
  }

  const maxWindow = Math.min(modulusConfig.maxWindow, elastic.length);
  const minWindow = Math.min(modulusConfig.minWindow, maxWindow);

  let best = null;
  for (let windowSize = minWindow; windowSize <= maxWindow; windowSize += 1) {
    const segment = elastic.slice(0, windowSize);
    const fit = linearRegression(segment);
    if (!fit || !Number.isFinite(fit.r2)) {
      continue;
    }
    if (!best || fit.r2 > best.r2 + 1e-6 || (Math.abs(fit.r2 - best.r2) <= 1e-6 && windowSize > best.windowSize)) {
      best = { ...fit, pairs: segment, windowSize };
    }
  }

  if (!best) {
    const fallback = linearRegression(elastic);
    if (!fallback) {
      return null;
    }
    return { ...fallback, pairs: elastic, mode: "fallback" };
  }

  return { ...best, mode: "prefix" };
}

function linearRegression(pairs) {
  const n = pairs.length;
  if (n < 2) {
    return null;
  }

  let sumX = 0;
  let sumY = 0;
  for (const pair of pairs) {
    sumX += pair.x;
    sumY += pair.y;
  }

  const meanX = sumX / n;
  const meanY = sumY / n;

  let numerator = 0;
  let denominator = 0;
  let ssTot = 0;
  let ssRes = 0;

  for (const pair of pairs) {
    const dx = pair.x - meanX;
    numerator += dx * (pair.y - meanY);
    denominator += dx * dx;
    ssTot += (pair.y - meanY) * (pair.y - meanY);
  }

  if (denominator === 0) {
    return null;
  }

  const slope = numerator / denominator;
  const intercept = meanY - slope * meanX;

  for (const pair of pairs) {
    const predicted = slope * pair.x + intercept;
    ssRes += (pair.y - predicted) * (pair.y - predicted);
  }

  const r2 = ssTot === 0 ? 0 : 1 - ssRes / ssTot;

  return { slope, intercept, r2 };
}

function setFeedback(message) {
  feedback.textContent = message;
  if (message && message !== lastPopupMessage) {
    lastPopupMessage = message;
    alert(message);
  }
  if (!message) {
    lastPopupMessage = "";
  }
}

function showSummaryPanel(message) {
  if (!summaryPanel || !summaryOutput) {
    alert(message);
    return;
  }
  summaryOutput.value = message;
  summaryPanel.hidden = false;
  summaryOutput.focus();
  summaryOutput.select();
}

function copySummaryToClipboard() {
  if (!summaryOutput) {
    return;
  }
  const text = summaryOutput.value.trim();
  if (!text) {
    setFeedback("Summary is empty.");
    return;
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => setFeedback("Summary copied."))
      .catch(() => {
        summaryOutput.select();
        const ok = document.execCommand("copy");
        setFeedback(ok ? "Summary copied." : "Unable to copy summary.");
      });
    return;
  }

  summaryOutput.select();
  const ok = document.execCommand("copy");
  setFeedback(ok ? "Summary copied." : "Unable to copy summary.");
}

function buildSummaryMessage(source) {
  if (!source || !source.trim()) {
    return null;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    return null;
  }

  const lineRange = readLineRange(stripDecorations(source));
  if (lineRange.error) {
    return null;
  }

  const stressRange = readStressRange();
  if (stressRange.error) {
    return null;
  }

  const strainRange = readStrainRange();
  if (strainRange.error) {
    return null;
  }

  const unit = stressUnitSelect.value;
  const totalPoints = parsed.pairs.length;
  const fit = estimateYoungsModulus(parsed.pairs, elasticLineOverride || elasticRangeOverride);
  const baseFit = estimateYoungsModulus(parsed.pairs);
  const metrics = computeMetrics(parsed.pairs, baseFit);
  const selectedPairs = elasticLineOverride || elasticRangeOverride || null;
  const summaryRangeOnly = !!summaryRangeToggle?.checked;
  const summaryScope = summaryRangeOnly
    ? selectedPairs
      ? "Selected range"
      : "Selected range (not active)"
    : "Full dataset";
  const summaryPairs = summaryRangeOnly && selectedPairs ? selectedPairs : parsed.pairs;
  const summaryFit = estimateYoungsModulus(summaryPairs);
  const hardeningPairs = summaryPairs;
  const truePlasticPairs = getTruePlasticPairs(summaryPairs, summaryFit);
  const elasticModulus = readElasticModulus();
  const plasticStrainStep = readPlasticStrainStep();
  const hardening = summaryFit ? estimatePowerHardening(hardeningPairs, summaryFit) : null;
  const yieldResult = summaryFit ? estimateOffsetYield(summaryPairs, summaryFit) : null;
  const fitSource = elasticLineOverride
    ? `Line range (${elasticLineOverride.length} points)`
    : elasticRangeOverride
    ? `${elasticRangeAxis === "strain" ? "Strain" : "Stress"} range (${elasticRangeOverride.length} points)`
    : "Auto-selection";

  const stressRangeLabel = stressRangeActive
    ? `${stressRange.min ?? "-inf"} to ${stressRange.max ?? "inf"} ${unit}`
    : "Not active";

  const strainRangeLabel = strainRangeActive
    ? `${strainRange.min ?? "-inf"} to ${strainRange.max ?? "inf"}`
    : "Not active";

  const lineLabel = lineRangeActive
    ? `${lineFromInput.value || "?"} to ${lineToInput.value || "?"} (data rows)`
    : "Not active";

  const formatStress = (value) => {
    if (!Number.isFinite(value)) {
      return "--";
    }
    return unit === "MPa" ? `${Math.round(value)}` : value.toFixed(2);
  };

  const modulusText =
    baseFit && Number.isFinite(baseFit.slope)
      ? `Young's Modulus: ${formatStress(baseFit.slope)} ${unit}`
      : "Young's Modulus: --";
  const utsText = metrics
    ? `${formatStress(metrics.uts)} ${unit} @ ${metrics.utsStrain.toFixed(6)}`
    : "--";
  const tangentSummaryText =
    metrics && metrics.tangentModulus !== null
      ? `${formatStress(metrics.tangentModulus)} ${unit}`
      : "--";
  const yieldSummaryText = metrics?.yieldPoint
    ? `${formatStress(metrics.yieldPoint.y)} ${unit} @ ${metrics.yieldPoint.x.toFixed(6)}`
    : "--";
  const fractureText = metrics
    ? `${formatStress(metrics.fracture.y)} ${unit} @ ${metrics.fracture.x.toFixed(6)}`
    : "--";
  const toughnessText = metrics ? `${formatStress(metrics.toughness)} ${unit}` : "--";
  const resilienceText = metrics?.resilience
    ? `${formatStress(metrics.resilience)} ${unit}`
    : "--";
  const hardeningText =
    hardening && hardening.K !== null && hardening.n !== null
      ? `H=${formatStress(hardening.K)} ${unit}, n=${hardening.n.toFixed(3)} (R2 ${hardening.r2.toFixed(4)}, ${hardening.count} pts)`
      : "--";
  const powerInputsText = getPowerInputSummary();
  let plasticOutputSummary = "Plastic strain output: --";
  if (elasticModulus.error || plasticStrainStep.error) {
    plasticOutputSummary = "Plastic strain output: --";
  } else if (!elasticModulus.value) {
    plasticOutputSummary = "Plastic strain output: Enter E to compute.";
  } else if (truePlasticPairs.length > 0) {
    const rowCount = truePlasticPairs.length - (yieldResult ? 1 : 0);
    const stepLabel = plasticStrainStep.value ? `, step=${plasticStrainStep.value}` : "";
    plasticOutputSummary = `Plastic strain output: ${Math.max(rowCount, 1)} rows (E=${elasticModulus.value}${stepLabel})`;
  }

  return [
    "Summary",
    "",
    `Total points: ${totalPoints}`,
    `${modulusText}`,
    `Fit source: ${fitSource}`,
    `Stress range: ${stressRangeLabel}`,
    `Strain range: ${strainRangeLabel}`,
    `Line range: ${lineLabel}`,
    `Power/plastic scope: ${summaryScope}`,
    `UTS: ${utsText}`,
    `Tangent modulus: ${tangentSummaryText}`,
    `Yield (0.2%): ${yieldSummaryText} (auto elastic fit)`,
    `Fracture: ${fractureText}`,
    `Toughness: ${toughnessText}`,
    `Resilience (elastic area): ${resilienceText}`,
    `Power hardening: ${hardeningText}`,
    `Power inputs: ${powerInputsText}`,
    plasticOutputSummary,
    referenceLoaded
      ? `Reference (${referenceDataset.name}): ${referenceDataset.path}`
      : "",
  ].join("\n");
}

function plotFromRaw(raw) {
  rawData = stripDecorations(raw);
  if (hasHeaderCheckbox && detectHeader(rawData)) {
    hasHeaderCheckbox.checked = true;
  }
  const result = parseNumbers(rawData);
  if (result.error) {
    setFeedback(result.error);
    renderDataTable([]);
    renderDataPlot([]);
    updateControlsState();
    return;
  }

  const lineRange = readLineRange(rawData);
  if (lineRange.error) {
    setFeedback(lineRange.error);
    updateControlsState();
    return;
  }

  const stressRange = readStressRange();
  if (stressRange.error) {
    setFeedback(stressRange.error);
    renderDataTable([]);
    renderDataPlot([]);
    updateControlsState();
    return;
  }
  const strainRange = readStrainRange();
  if (strainRange.error) {
    setFeedback(strainRange.error);
    renderDataTable([]);
    renderDataPlot([]);
    updateControlsState();
    return;
  }

  const rangeAxis =
    !lineRange.active && strainRangeActive
      ? "strain"
      : !lineRange.active && stressRangeActive
      ? "stress"
      : null;
  const selectedRange =
    rangeAxis === "strain" ? strainRange : rangeAxis === "stress" ? stressRange : null;
  const effectiveRange = lineRange.active || !selectedRange ? { min: null, max: null } : selectedRange;
  const autoFitRange =
    !lineRange.active && !stressRangeActive && !strainRangeActive
      ? getAutoFitRange(result.pairs)
      : null;
  updateDisplay(rawData, effectiveRange, lineRange, autoFitRange, rangeAxis);

  const fullPairs = result.pairs;
  const filtered = applyRange(fullPairs, effectiveRange, rangeAxis);
  if (filtered.error) {
    setFeedback(filtered.error);
    renderDataTable([]);
    renderDataPlot([]);
    updateControlsState();
    return;
  }

  if (filtered.pairs.length < 2) {
    setFeedback("Not enough points in the selected range.");
    renderDataTable([]);
    renderDataPlot([]);
    updateControlsState();
    return;
  }

  let warning = "";

  if (lineRange.active) {
    elasticRangeOverride = null;
    elasticRangeAxis = null;
    elasticLineOverride = lineRange.pairs;
  } else if (rangeAxis && (effectiveRange.min !== null || effectiveRange.max !== null)) {
    elasticLineOverride = null;
    if (filtered.pairs.length >= selectionConfig.minPoints) {
      elasticRangeOverride = filtered.pairs;
      elasticRangeAxis = rangeAxis;
    } else {
      elasticRangeOverride = null;
      elasticRangeAxis = null;
      warning = "Range has fewer than 10 points; fit uses auto-selection.";
    }
  } else {
    elasticLineOverride = null;
    elasticRangeOverride = null;
    elasticRangeAxis = null;
  }

  setFeedback(warning);
  const autoFillKey = buildAutoFillKey(fullPairs);
  const shouldAutoFill = autoFillKey !== lastAutoFillKey;
  if (shouldAutoFill) {
    lastAutoFillKey = autoFillKey;
  }
  renderChart(fullPairs, elasticLineOverride || elasticRangeOverride, shouldAutoFill);
  const modulusValue = readElasticModulus().value;
  renderDataTable(fullPairs, modulusValue);
  renderDataPlot(fullPairs, modulusValue);
  const xDomain = extent(fullPairs.map((pair) => pair.x));
  const yDomain = extent(fullPairs.map((pair) => pair.y));
  summary.textContent = `${fullPairs.length} points | Strain ${xDomain[0].toFixed(2)}-${xDomain[1].toFixed(2)} | Stress ${yDomain[0].toFixed(2)}-${yDomain[1].toFixed(2)}`;
  const summaryMessage = buildSummaryMessage(rawData);
  if (summaryMessage && summaryOutput) {
    summaryOutput.value = summaryMessage;
  }
  updateControlsState();
}

function refreshFromSource() {
  const source = rawData || input.value;
  if (source.trim().length > 0) {
    plotFromRaw(source);
    return;
  }
  updateControlsState();
}

stressUnitSelect.addEventListener("change", () => {
  refreshFromSource();
  if (lastPowerDataset && lastPowerDataset.rows && lastPowerDataset.rows.length > 0) {
    renderPowerDatasetChart(
      lastPowerDataset.rows,
      lastPowerDataset.unit || stressUnitSelect.value,
    );
  }
  updatePowerSummaryAndBadges();
});

showTrueCheckbox.addEventListener("change", () => {
  refreshFromSource();
});

elasticModulusInput.addEventListener("input", () => {
  refreshFromSource();
});

plasticStrainStepInput.addEventListener("input", () => {
  refreshFromSource();
});

dataPlotSelect.addEventListener("change", () => {
  refreshFromSource();
});

dataPlotFitSelect.addEventListener("change", () => {
  refreshFromSource();
});

regionFitSelect.addEventListener("change", () => {
  refreshFromSource();
});

savePlasticBtn.addEventListener("click", () => {
  const content = plasticOutput.value.trim();
  if (!content) {
    setFeedback("No plastic region data to save.");
    return;
  }
  const blob = new Blob([`${content}\n`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "plastic_region_data.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
  setFeedback("Saved plastic region data.");
});

plasticStrainStepInput.addEventListener("change", () => {
  const check = readPlasticStrainStep(false);
  if (check.error) {
    setFeedback(check.error);
  }
});

const powerInputFields = [
  powerYieldInput,
  powerModulusInput,
  powerUtsInput,
  powerCoeffInput,
  powerExponentInput,
  powerPointsInput,
].filter(Boolean);

powerInputFields.forEach((field) => {
  field.addEventListener("input", () => {
    markPowerDatasetDirty();
  });
});

if (powerSpacingInputs && powerSpacingInputs.length > 0) {
  powerSpacingInputs.forEach((input) => {
    input.addEventListener("change", () => {
      markPowerDatasetDirty();
    });
  });
}

loadPowerRowBtn.addEventListener("click", () => {
  const text = powerRowInput ? powerRowInput.value.trim() : "";
  const parsed = parsePowerRowInput(text);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  powerYieldInput.value = formatInputValue(parsed.yieldStress, 2);
  powerModulusInput.value = formatInputValue(parsed.modulus, 2);
  powerUtsInput.value = formatInputValue(parsed.uts, 2);
  powerCoeffInput.value = formatInputValue(parsed.hardening, 2);
  powerExponentInput.value = formatInputValue(parsed.exponent, 4);
  const suffix = parsed.ignoredPoisson ? " Poisson ignored." : "";
  const label = parsed.material ? `Loaded ${parsed.material}.` : "Row loaded.";
  setPowerOutputStatus(`${label}${suffix}`);
  powerDatasetDirty = true;
  updatePowerSummaryAndBadges();
});

buildPowerBtn.addEventListener("click", () => {
  const inputs = readPowerDatasetInputs();
  if (inputs.error) {
    setFeedback(inputs.error);
    return;
  }
  const stressUnit = stressUnitSelect.value;
  const result = buildPowerDataset(inputs, stressUnit);
  if (result.error) {
    setFeedback(result.error);
    return;
  }
  lastPowerDataset = result;
  powerDatasetDirty = false;
  powerOutput.value = result.csv;
  const spacingLabel = inputs.spacing === "strain" ? "even strain" : "even stress";
  setPowerOutputStatus(`Generated ${result.count} points (${spacingLabel}).`);
  renderPowerDatasetChart(result.rows, result.unit);
  updatePowerSummaryAndBadges();
});

plotPowerBtn.addEventListener("click", () => {
  const content = powerOutput.value.trim();
  const canUseCached =
    lastPowerDataset &&
    !powerDatasetDirty &&
    lastPowerDataset.rows &&
    lastPowerDataset.rows.length >= 2 &&
    lastPowerDataset.csv &&
    content &&
    content === lastPowerDataset.csv.trim();

  let formatted = "";
  if (canUseCached) {
    formatted = lastPowerDataset.rows.map((row) => `${row.strain},${row.stress}`).join("\n");
  } else {
    if (!content) {
      setFeedback("Build the dataset first.");
      return;
    }
    const lines = content.split(/\r?\n/).slice(1);
    formatted = lines
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => {
        const [strain, stress] = line.split(",");
        return `${strain},${stress}`;
      })
      .join("\n");

    if (!formatted) {
      setFeedback("Dataset does not contain valid points.");
      return;
    }
  }

  hasHeaderCheckbox.checked = false;
  stressRangeActive = false;
  strainRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  rawData = formatted;
  input.value = formatted;
  plotFromRaw(formatted);
  updateControlsState();
  setFeedback("Loaded generated dataset into the plot.");
});

savePowerBtn.addEventListener("click", () => {
  const content = powerOutput.value.trim();
  if (!content) {
    setFeedback("No dataset to save.");
    return;
  }
  const blob = new Blob([`${content}\n`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "power_hardening_ansys.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
  setFeedback("Saved ANSYS dataset.");
});

savePowerPlotBtn.addEventListener("click", () => {
  if (!lastPowerDataset || !lastPowerDataset.rows || lastPowerDataset.rows.length === 0) {
    setFeedback("Build the dataset first.");
    return;
  }
  if (powerDatasetDirty) {
    setFeedback("Rebuild the dataset before exporting plot-ready CSV.");
    return;
  }
  const content = powerOutput.value.trim();
  if (!content || !lastPowerDataset.csv || content !== lastPowerDataset.csv.trim()) {
    setFeedback("Plot-ready export requires the latest built dataset.");
    return;
  }
  const stressUnit = lastPowerDataset.unit || stressUnitSelect.value;
  const contentToSave = buildPowerPlotCsv(lastPowerDataset.rows, stressUnit);
  const blob = new Blob([`${contentToSave}\n`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "power_hardening_plot.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
  setFeedback("Saved plot-ready CSV.");
});

applyRangeBtn.addEventListener("click", () => {
  stressRangeActive = true;
  strainRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before applying a range.");
    stressRangeActive = false;
    hardeningWarningMode = "silent";
    updateControlsState();
    return;
  }
  const range = readStressRange();
  if (range.error) {
    setFeedback(range.error);
    stressRangeActive = false;
    hardeningWarningMode = "silent";
    updateControlsState();
    return;
  }
  refreshFromSource();
});

clearRangeBtn.addEventListener("click", () => {
  stressMinInput.value = "";
  stressMaxInput.value = "";
  stressRangeActive = false;
  regionFitMode = "default";
  refreshFromSource();
  updateControlsState();
});

selectAllRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting all range data.");
    return;
  }
  const result = parseNumbers(source);
  if (result.error) {
    setFeedback(result.error);
    return;
  }
  const values = result.pairs.map((pair) => pair.y);
  const min = Math.min(...values);
  const max = Math.max(...values);
  stressMinInput.value = String(min);
  stressMaxInput.value = String(max);
  stressRangeActive = true;
  strainRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to full data range.");
  refreshFromSource();
});

selectYieldRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting yield range data.");
    return;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  const yieldPointData = estimateYieldPoint(parsed.pairs);
  if (!yieldPointData) {
    setFeedback("Unable to determine yield point from current data.");
    return;
  }
  stressMinInput.value = String(minStress(parsed.pairs));
  stressMaxInput.value = String(yieldPointData.y);
  stressRangeActive = true;
  strainRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to start through yield.");
  refreshFromSource();
});

selectUtsRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting UTS range data.");
    return;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  const utsPoint = parsed.pairs.reduce(
    (max, pair) => (pair.y > max.y ? pair : max),
    parsed.pairs[0],
  );
  stressMinInput.value = String(minStress(parsed.pairs));
  stressMaxInput.value = String(utsPoint.y);
  stressRangeActive = true;
  strainRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to start through UTS.");
  refreshFromSource();
});

selectPlasticRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting plastic range data.");
    return;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  const yieldPointData = estimateYieldPoint(parsed.pairs);
  if (!yieldPointData) {
    setFeedback("Unable to determine yield point from current data.");
    return;
  }
  const maxStress = Math.max(...parsed.pairs.map((pair) => pair.y));
  stressMinInput.value = String(yieldPointData.y);
  stressMaxInput.value = String(maxStress);
  if (plasticStrainStepInput) {
    plasticStrainStepInput.value = "0.005";
  }
  stressRangeActive = true;
  strainRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "plastic";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to yield through maximum stress.");
  refreshFromSource();
});

applyStrainRangeBtn.addEventListener("click", () => {
  strainRangeActive = true;
  stressRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before applying a range.");
    strainRangeActive = false;
    hardeningWarningMode = "silent";
    updateControlsState();
    return;
  }
  const range = readStrainRange();
  if (range.error) {
    setFeedback(range.error);
    strainRangeActive = false;
    hardeningWarningMode = "silent";
    updateControlsState();
    return;
  }
  refreshFromSource();
});

clearStrainRangeBtn.addEventListener("click", () => {
  strainMinInput.value = "";
  strainMaxInput.value = "";
  strainRangeActive = false;
  regionFitMode = "default";
  refreshFromSource();
  updateControlsState();
});

selectAllStrainRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting all range data.");
    return;
  }
  const result = parseNumbers(source);
  if (result.error) {
    setFeedback(result.error);
    return;
  }
  const values = result.pairs.map((pair) => pair.x);
  const min = Math.min(...values);
  const max = Math.max(...values);
  strainMinInput.value = String(min);
  strainMaxInput.value = String(max);
  strainRangeActive = true;
  stressRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to full data range.");
  refreshFromSource();
});

selectYieldStrainRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting yield range data.");
    return;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  const yieldPointData = estimateYieldPoint(parsed.pairs);
  if (!yieldPointData) {
    setFeedback("Unable to determine yield point from current data.");
    return;
  }
  strainMinInput.value = String(minStrain(parsed.pairs));
  strainMaxInput.value = String(yieldPointData.x);
  strainRangeActive = true;
  stressRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to start through yield.");
  refreshFromSource();
});

selectUtsStrainRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting UTS range data.");
    return;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  const utsPoint = parsed.pairs.reduce(
    (max, pair) => (pair.y > max.y ? pair : max),
    parsed.pairs[0],
  );
  strainMinInput.value = String(minStrain(parsed.pairs));
  strainMaxInput.value = String(utsPoint.x);
  strainRangeActive = true;
  stressRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to start through UTS.");
  refreshFromSource();
});

selectPlasticStrainRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting plastic range data.");
    return;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  const yieldPointData = estimateYieldPoint(parsed.pairs);
  if (!yieldPointData) {
    setFeedback("Unable to determine yield point from current data.");
    return;
  }
  const maxStrain = Math.max(...parsed.pairs.map((pair) => pair.x));
  strainMinInput.value = String(yieldPointData.x);
  strainMaxInput.value = String(maxStrain);
  if (plasticStrainStepInput) {
    plasticStrainStepInput.value = "0.005";
  }
  strainRangeActive = true;
  stressRangeActive = false;
  lineRangeActive = false;
  elasticLineOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "plastic";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to yield through maximum strain.");
  refreshFromSource();
});

hasHeaderCheckbox.addEventListener("change", () => {
  refreshFromSource();
});

applyLineRangeBtn.addEventListener("click", () => {
  lineRangeActive = true;
  stressRangeActive = false;
  strainRangeActive = false;
  elasticRangeOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before applying a range.");
    lineRangeActive = false;
    hardeningWarningMode = "silent";
    updateControlsState();
    return;
  }
  const check = readLineRange(stripDecorations(source));
  if (check.error) {
    setFeedback(check.error);
    lineRangeActive = false;
    hardeningWarningMode = "silent";
    updateControlsState();
    return;
  }
  refreshFromSource();
});

clearLineRangeBtn.addEventListener("click", () => {
  lineFromInput.value = "";
  lineToInput.value = "";
  elasticLineOverride = null;
  lineRangeActive = false;
  regionFitMode = "default";
  selectionStatus.textContent = "Fit source: auto-selection.";
  refreshFromSource();
  updateControlsState();
});

selectAllLineRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting all range data.");
    return;
  }
  const maxLine = getDataLines(source).length;
  if (maxLine === 0) {
    setFeedback("No data rows available to select.");
    return;
  }
  lineFromInput.value = "1";
  lineToInput.value = String(maxLine);
  lineRangeActive = true;
  elasticRangeOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Range inputs overridden to full data range.");
  refreshFromSource();
});

selectYieldLineRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting yield line range data.");
    return;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  const yieldPointData = estimateYieldPoint(parsed.pairs);
  if (!yieldPointData) {
    setFeedback("Unable to determine yield point from current data.");
    return;
  }
  const lines = getDataLines(source);
  if (lines.length === 0) {
    setFeedback("No data rows available to select.");
    return;
  }
  const yieldIndex = findYieldLineIndex(lines, yieldPointData);
  if (yieldIndex === null) {
    setFeedback("Unable to map yield point to a data row.");
    return;
  }
  lineFromInput.value = "1";
  lineToInput.value = String(yieldIndex + 1);
  lineRangeActive = true;
  stressRangeActive = false;
  strainRangeActive = false;
  elasticRangeOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Line range overridden to start through yield.");
  refreshFromSource();
});

selectUtsLineRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting UTS line range data.");
    return;
  }
  const lines = getDataLines(source);
  if (lines.length === 0) {
    setFeedback("No data rows available to select.");
    return;
  }
  const utsIndex = findUtsLineIndex(lines);
  if (utsIndex === null) {
    setFeedback("Unable to map UTS to a data row.");
    return;
  }
  lineFromInput.value = "1";
  lineToInput.value = String(utsIndex + 1);
  lineRangeActive = true;
  stressRangeActive = false;
  strainRangeActive = false;
  elasticRangeOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "default";
  hardeningWarningMode = "popup";
  setFeedback("Line range overridden to start through UTS.");
  refreshFromSource();
});

selectPlasticLineRangeBtn.addEventListener("click", () => {
  const source = rawData || input.value;
  if (source.trim().length === 0) {
    setFeedback("Load data before selecting plastic line range data.");
    return;
  }
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }
  const yieldPointData = estimateYieldPoint(parsed.pairs);
  if (!yieldPointData) {
    setFeedback("Unable to determine yield point from current data.");
    return;
  }
  const lines = getDataLines(source);
  if (lines.length === 0) {
    setFeedback("No data rows available to select.");
    return;
  }
  const yieldIndex = findYieldLineIndex(lines, yieldPointData);
  const utsIndex = findUtsLineIndex(lines);
  if (yieldIndex === null || utsIndex === null) {
    setFeedback("Unable to map plastic region to data rows.");
    return;
  }
  lineFromInput.value = String(yieldIndex + 1);
  lineToInput.value = String(utsIndex + 1);
  lineRangeActive = true;
  stressRangeActive = false;
  strainRangeActive = false;
  elasticRangeOverride = null;
  elasticRangeAxis = null;
  regionFitMode = "plastic";
  hardeningWarningMode = "popup";
  setFeedback("Line range overridden to yield through maximum stress.");
  refreshFromSource();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  if (file.size === 0) {
    setFeedback("The selected file is empty.");
    return;
  }

  if (file.size > limits.maxFileSize) {
    setFeedback("File is too large. Please upload a smaller file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || "");
    if (text.trim().length === 0) {
      setFeedback("The selected file has no readable data.");
      return;
    }
    referenceLoaded = false;
    regionFitMode = "default";
    if (referenceInfo) {
      referenceInfo.textContent = "Loads Al2024-T351.csv with its header row (MPa units).";
    }
    rawData = text.trim();
    plotFromRaw(rawData);
  };
  reader.onerror = () => {
    setFeedback("Unable to read the file. Please try again.");
  };
  reader.readAsText(file);
});

input.addEventListener("input", () => {
  referenceLoaded = false;
  regionFitMode = "default";
  if (referenceInfo) {
    referenceInfo.textContent = "Loads Al2024-T351.csv with its header row (MPa units).";
  }
});

referenceBtn.addEventListener("click", () => {
  loadReferenceDataset();
});

resetBtn.addEventListener("click", () => {
  input.value = "";
  fileInput.value = "";
  elasticRangeOverride = null;
  elasticLineOverride = null;
  stressRangeActive = false;
  strainRangeActive = false;
  lineRangeActive = false;
  selectionStatus.textContent = "Fit source: auto-selection.";
  hasHeaderCheckbox.checked = false;
  stressMinInput.value = "";
  stressMaxInput.value = "";
  strainMinInput.value = "";
  strainMaxInput.value = "";
  lineFromInput.value = "";
  lineToInput.value = "";
  elasticModulusInput.value = "";
  plasticStrainStepInput.value = "";
  if (powerYieldInput) {
    powerYieldInput.value = "";
  }
  if (powerModulusInput) {
    powerModulusInput.value = "";
  }
  if (powerUtsInput) {
    powerUtsInput.value = "";
  }
  if (powerCoeffInput) {
    powerCoeffInput.value = "";
  }
  if (powerExponentInput) {
    powerExponentInput.value = "";
  }
  if (powerPointsInput) {
    powerPointsInput.value = "13";
  }
  if (powerRowInput) {
    powerRowInput.value = "";
  }
  if (powerSpacingInputs && powerSpacingInputs.length > 0) {
    powerSpacingInputs.forEach((input) => {
      input.checked = input.value === "stress";
    });
  }
  lastPowerDataset = null;
  powerDatasetDirty = false;
  rawData = "";
  referenceLoaded = false;
  hardeningWarningMode = "silent";
  regionFitMode = "default";
  if (regionFitSelect) {
    regionFitSelect.value = "linear";
  }
  setFeedback("");
  if (referenceInfo) {
    referenceInfo.textContent = "Loads Al2024-T351.csv with its header row (MPa units).";
  }
  summary.textContent = "Awaiting data...";
  modulus.textContent = "Young's Modulus: --";
  yieldPointText.textContent = "Yield (0.2%): --";
  yieldPointTop.textContent = "Yield (0.2%): --";
  utsText.textContent = "UTS: --";
  utsTop.textContent = "UTS: --";
  tangentText.textContent = "Tangent modulus: --";
  hardeningText.textContent = "Power hardening: --";
  regionFitCubic.textContent = "R2: --";
  regionFitLine.textContent = "Regression: --";
  regionFitLine.setAttribute("title", "");
  hardeningSummary.textContent = "Awaiting plastic range...";
  hardeningPanel.style.display = "none";
  hardeningChartShell.style.display = "none";
  plasticSummary.textContent = "Awaiting plastic region data...";
  plasticPanel.style.display = "none";
  plasticChartShell.style.display = "none";
  plasticOutput.value = "";
  if (powerOutput) {
    powerOutput.value = "";
  }
  setPowerOutputStatus("Awaiting inputs...");
  setPowerSummary("Awaiting inputs...", "Range: --");
  setPowerBadges([]);
  clearPowerChart();
  renderDataTable([]);
  renderDataPlot([]);
  elasticSummary.textContent = "Awaiting fit segment...";
  clearChart();
  updateControlsState();
});

summaryBtn.addEventListener("click", () => {
  if (!(rawData || input.value).trim()) {
    setFeedback("Load data to view a summary.");
    return;
  }

  const source = rawData || input.value;
  const parsed = parseNumbers(source);
  if (parsed.error) {
    setFeedback(parsed.error);
    return;
  }

  const message = buildSummaryMessage(source);
  if (!message) {
    setFeedback("Unable to build summary from current data.");
    return;
  }

  showSummaryPanel(message);
});

if (copySummaryBtn) {
  copySummaryBtn.addEventListener("click", () => {
    copySummaryToClipboard();
  });
}

if (closeSummaryBtn && summaryPanel) {
  closeSummaryBtn.addEventListener("click", () => {
    summaryPanel.hidden = true;
  });
}

function stripDecorations(raw) {
  return raw.replace(/^\s*(?:>>\s*)?\d+\s*\|\s*/gm, "");
}

function readStressRange() {
  if (!stressRangeActive) {
    return { min: null, max: null };
  }

  const minValue = stressMinInput.value.trim();
  const maxValue = stressMaxInput.value.trim();
  const min = minValue === "" ? null : Number(minValue);
  const max = maxValue === "" ? null : Number(maxValue);

  if ((min !== null && Number.isNaN(min)) || (max !== null && Number.isNaN(max))) {
    return { error: "Stress range must be numeric values." };
  }

  if (min !== null && max !== null && min > max) {
    return { error: "Stress range min must be <= max." };
  }

  return { min, max };
}

function readStrainRange() {
  if (!strainRangeActive) {
    return { min: null, max: null };
  }

  const minValue = strainMinInput.value.trim();
  const maxValue = strainMaxInput.value.trim();
  const min = minValue === "" ? null : Number(minValue);
  const max = maxValue === "" ? null : Number(maxValue);

  if ((min !== null && Number.isNaN(min)) || (max !== null && Number.isNaN(max))) {
    return { error: "Strain range must be numeric values." };
  }

  if (min !== null && max !== null && min > max) {
    return { error: "Strain range min must be <= max." };
  }

  return { min, max };
}

function readElasticModulus() {
  const raw = elasticModulusInput.value.trim();
  if (raw.length === 0) {
    return { value: null };
  }
  const value = Number(raw);
  if (!Number.isFinite(value) || value <= 0) {
    return { error: "Elastic modulus E must be a positive number." };
  }
  return { value };
}

function formatInputValue(value, digits) {
  if (!Number.isFinite(value)) {
    return "";
  }
  return value.toFixed(digits);
}

function setPowerOutputStatus(message) {
  if (powerOutputStatus) {
    powerOutputStatus.textContent = message;
  }
}

function setPowerSummary(inputsText, rangeText) {
  if (powerSummaryInputs) {
    powerSummaryInputs.textContent = inputsText;
  }
  if (powerSummaryRange) {
    powerSummaryRange.textContent = rangeText;
  }
}

function setPowerBadges(badges, options = {}) {
  if (!powerSummaryBadges) {
    return;
  }
  powerSummaryBadges.innerHTML = "";
  const showOk = options.showOk === true;
  if (!badges || badges.length === 0) {
    if (!showOk) {
      return;
    }
    const tag = document.createElement("span");
    tag.className = "badge ok";
    tag.textContent = "OK";
    powerSummaryBadges.appendChild(tag);
    return;
  }
  badges.forEach((badge) => {
    const tag = document.createElement("span");
    tag.className = `badge ${badge.type || "warning"}`;
    tag.textContent = badge.label;
    powerSummaryBadges.appendChild(tag);
  });
}

function getPowerSpacing() {
  if (!powerSpacingInputs || powerSpacingInputs.length === 0) {
    return "stress";
  }
  const checked = Array.from(powerSpacingInputs).find((input) => input.checked);
  return checked ? checked.value : "stress";
}

function getPowerInputSummary() {
  const yieldText = powerYieldInput?.value.trim() || "--";
  const modulusText = powerModulusInput?.value.trim() || "--";
  const utsText = powerUtsInput?.value.trim() || "--";
  const hardeningText = powerCoeffInput?.value.trim() || "--";
  const exponentText = powerExponentInput?.value.trim() || "--";
  const pointsText = powerPointsInput?.value.trim() || "--";
  const spacingLabel = getPowerSpacing() === "strain" ? "even strain" : "even stress";
  return `Yield=${yieldText}, E=${modulusText}, UTS=${utsText}, H=${hardeningText}, n=${exponentText}, p=${pointsText} (${spacingLabel})`;
}

function readRequiredNumber(input, label, options = {}) {
  if (!input) {
    return { error: `${label} input not available.` };
  }
  const raw = input.value.trim();
  if (raw.length === 0) {
    return { error: `${label} is required.` };
  }
  const value = Number(raw);
  if (!Number.isFinite(value)) {
    return { error: `${label} must be a number.` };
  }
  if (options.minExclusive !== undefined && value <= options.minExclusive) {
    return { error: `${label} must be greater than ${options.minExclusive}.` };
  }
  if (options.min !== undefined && value < options.min) {
    return { error: `${label} must be >= ${options.min}.` };
  }
  if (options.max !== undefined && value > options.max) {
    return { error: `${label} must be <= ${options.max}.` };
  }
  return { value };
}

function readPowerDatasetInputs() {
  const yieldCheck = readRequiredNumber(powerYieldInput, "Yield stress", {
    minExclusive: 0,
  });
  if (yieldCheck.error) {
    return { error: yieldCheck.error };
  }
  const modulusCheck = readRequiredNumber(powerModulusInput, "Young's modulus E", {
    minExclusive: 0,
  });
  if (modulusCheck.error) {
    return { error: modulusCheck.error };
  }
  const utsCheck = readRequiredNumber(powerUtsInput, "UTS", { minExclusive: 0 });
  if (utsCheck.error) {
    return { error: utsCheck.error };
  }
  const coeffCheck = readRequiredNumber(powerCoeffInput, "Hardening coefficient H", {
    minExclusive: 0,
  });
  if (coeffCheck.error) {
    return { error: coeffCheck.error };
  }
  const exponentCheck = readRequiredNumber(powerExponentInput, "Hardening exponent n", {
    minExclusive: 0,
  });
  if (exponentCheck.error) {
    return { error: exponentCheck.error };
  }

  if (utsCheck.value <= yieldCheck.value) {
    return { error: "UTS must be greater than yield stress." };
  }

  let points = 13;
  if (powerPointsInput) {
    const pointsRaw = powerPointsInput.value.trim();
    if (pointsRaw.length > 0) {
      const pointsValue = Number(pointsRaw);
      if (!Number.isFinite(pointsValue)) {
        return { error: "Points must be a number." };
      }
      points = Math.round(pointsValue);
    }
  }

  if (points < 2) {
    return { error: "Points must be at least 2." };
  }
  if (points > 5000) {
    return { error: "Points must be 5000 or fewer." };
  }

  return {
    yieldStress: yieldCheck.value,
    modulus: modulusCheck.value,
    uts: utsCheck.value,
    hardening: coeffCheck.value,
    exponent: exponentCheck.value,
    points,
    spacing: getPowerSpacing(),
  };
}

function computePowerPoint(sigma, params) {
  const epsilon = Math.pow(sigma / params.hardening, 1 / params.exponent);
  const strain = epsilon - sigma / params.modulus;
  if (!Number.isFinite(epsilon) || !Number.isFinite(strain)) {
    return null;
  }
  return { epsilon, strain, stress: sigma };
}

function solveSigmaForStrain(targetStrain, params, low, high) {
  const f = (sigma) => {
    const point = computePowerPoint(sigma, params);
    return point ? point.strain - targetStrain : null;
  };
  let fLow = f(low);
  let fHigh = f(high);
  if (fLow === null || fHigh === null) {
    return null;
  }
  if (fLow === 0) {
    return low;
  }
  if (fHigh === 0) {
    return high;
  }
  if (fLow * fHigh > 0) {
    return null;
  }
  let left = low;
  let right = high;
  for (let i = 0; i < 80; i += 1) {
    const mid = (left + right) / 2;
    const fMid = f(mid);
    if (fMid === null) {
      return null;
    }
    if (Math.abs(fMid) < 1e-10) {
      return mid;
    }
    if (fLow * fMid <= 0) {
      right = mid;
      fHigh = fMid;
    } else {
      left = mid;
      fLow = fMid;
    }
  }
  return (left + right) / 2;
}

function buildPowerDataset(params, stressUnit) {
  const rows = [];

  const span = params.uts - params.yieldStress;
  const denom = params.points - 1;

  if (params.spacing === "strain") {
    const yieldPoint = computePowerPoint(params.yieldStress, params);
    const utsPoint = computePowerPoint(params.uts, params);
    if (!yieldPoint || !utsPoint) {
      return { error: "Computed strain is not finite. Check H and n values." };
    }
    if (utsPoint.strain <= yieldPoint.strain) {
      return { error: "Plastic strain range is not increasing. Check inputs." };
    }
    for (let i = 0; i < params.points; i += 1) {
      const ratio = denom === 0 ? 0 : i / denom;
      const targetStrain =
        yieldPoint.strain + (utsPoint.strain - yieldPoint.strain) * ratio;
      const sigma = solveSigmaForStrain(
        targetStrain,
        params,
        params.yieldStress,
        params.uts,
      );
      if (sigma === null) {
        return { error: "Unable to solve stress values for even strain spacing." };
      }
      const point = computePowerPoint(sigma, params);
      if (!point) {
        return { error: "Computed strain is not finite. Check H and n values." };
      }
      rows.push(point);
    }
  } else {
    for (let i = 0; i < params.points; i += 1) {
      const sigma = params.yieldStress + (span * i) / denom;
      const point = computePowerPoint(sigma, params);
      if (!point) {
        return { error: "Computed strain is not finite. Check H and n values." };
      }
      rows.push(point);
    }
  }

  const header = `Plastic strain for Ansys input,stress (${stressUnit})`;
  const lines = rows.map(
    (row) => `${row.strain.toFixed(6)},${row.stress.toFixed(2)}`,
  );

  return {
    csv: [header, ...lines].join("\n"),
    count: rows.length,
    pairs: rows.map((row) => ({ x: row.strain, y: row.stress })),
    rows,
    unit: stressUnit,
  };
}

function buildPowerPlotCsv(rows, stressUnit) {
  const header = `epsilon,plastic_strain,stress (${stressUnit})`;
  const lines = rows.map(
    (row) =>
      `${row.epsilon.toFixed(6)},${row.strain.toFixed(6)},${row.stress.toFixed(2)}`,
  );
  return [header, ...lines].join("\n");
}

function evaluatePowerDataset(rows) {
  const badges = [];
  if (!rows || rows.length === 0) {
    return badges;
  }
  let strainDecreases = false;
  let stressDecreases = false;
  let negativeStrain = false;
  let nonFinite = false;
  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    if (!Number.isFinite(row.strain) || !Number.isFinite(row.stress)) {
      nonFinite = true;
      break;
    }
    if (row.strain < 0) {
      negativeStrain = true;
    }
    if (i > 0) {
      if (row.strain < rows[i - 1].strain) {
        strainDecreases = true;
      }
      if (row.stress < rows[i - 1].stress) {
        stressDecreases = true;
      }
    }
  }
  if (nonFinite) {
    badges.push({ label: "Non-finite values", type: "warning" });
  }
  if (negativeStrain) {
    badges.push({ label: "Negative strain", type: "warning" });
  }
  if (strainDecreases) {
    badges.push({ label: "Strain not monotonic", type: "warning" });
  }
  if (stressDecreases) {
    badges.push({ label: "Stress not monotonic", type: "warning" });
  }
  return badges;
}

function buildPowerBadges(rows, options = {}) {
  const badges = [];
  if (options.dirty) {
    badges.push({ label: "Needs rebuild", type: "warning" });
    return badges;
  }
  if (rows && rows.length > 0) {
    badges.push(...evaluatePowerDataset(rows));
  }
  if (options.unitMismatch) {
    badges.push({ label: "Unit mismatch", type: "warning" });
  }
  return badges;
}

function updatePowerSummaryAndBadges() {
  const inputsText = getPowerInputSummary();
  let rangeText = "Range: --";
  let unitMismatch = false;
  let rows = null;
  if (lastPowerDataset && lastPowerDataset.rows && lastPowerDataset.rows.length > 0 && !powerDatasetDirty) {
    rows = lastPowerDataset.rows;
    const strains = rows.map((row) => row.strain);
    const stresses = rows.map((row) => row.stress);
    const builtUnit = lastPowerDataset.unit || stressUnitSelect.value;
    const selectorUnit = stressUnitSelect.value;
    unitMismatch = selectorUnit !== builtUnit;
    rangeText = `Range: strain ${Math.min(...strains).toFixed(6)}-${Math.max(...strains).toFixed(6)}, stress ${Math.min(...stresses).toFixed(2)}-${Math.max(...stresses).toFixed(2)} ${builtUnit}`;
    if (unitMismatch) {
      rangeText += ` (selector: ${selectorUnit})`;
    }
  }
  setPowerSummary(inputsText, rangeText);
  const badges = buildPowerBadges(rows, { dirty: powerDatasetDirty, unitMismatch });
  const showOk = badges.length === 0 && !powerDatasetDirty && !unitMismatch && rows;
  setPowerBadges(badges, { showOk });
}

function markPowerDatasetDirty() {
  powerDatasetDirty = true;
  const hasOutput = powerOutput && powerOutput.value.trim().length > 0;
  setPowerOutputStatus(hasOutput ? "Inputs updated; rebuild dataset." : "Awaiting inputs...");
  updatePowerSummaryAndBadges();
}

function parsePowerRowInput(text) {
  if (!text) {
    return { error: "Paste a workbook row to load." };
  }
  const tokens = text
    .split(/[\t,]+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 0);
  if (tokens.length === 0) {
    return { error: "Paste a workbook row to load." };
  }
  let material = null;
  if (Number.isNaN(Number(tokens[0]))) {
    material = tokens.shift();
  }
  const numbers = tokens.map((token) => Number(token));
  if (numbers.some((value) => !Number.isFinite(value))) {
    return { error: "Row contains non-numeric values in numeric columns." };
  }
  if (numbers.length !== 5 && numbers.length !== 6) {
    return { error: "Row must include Yield, E, UTS, H, and n (optionally Poisson)." };
  }
  const yieldStress = numbers[0];
  const modulus = numbers[1];
  const uts = numbers[2];
  const ignoredPoisson = numbers.length === 6;
  const hardening = numbers[ignoredPoisson ? 4 : 3];
  const exponent = numbers[ignoredPoisson ? 5 : 4];
  if (!Number.isFinite(hardening) || !Number.isFinite(exponent)) {
    return { error: "Row must include hardening coefficient and exponent." };
  }
  return {
    material,
    yieldStress,
    modulus,
    uts,
    hardening,
    exponent,
    ignoredPoisson,
  };
}

function renderPowerDatasetChart(rows, stressUnit) {
  if (!powerGrid || !powerAxes || !powerCurveStrain || !powerPoints) {
    return;
  }
  clearPowerChart();
  if (!rows || rows.length < 2) {
    return;
  }

  const strainPairs = rows.map((row) => ({ x: row.strain, y: row.stress }));
  const xValues = strainPairs.map((pair) => pair.x);
  const yValues = rows.map((row) => row.stress);

  const xDomain = extent(xValues);
  const yDomain = extent(yValues);
  const xTicks = 4;
  const yTicks = 4;

  renderGrid(powerGrid, xTicks, yTicks, chartBox);
  renderAxes(powerAxes, xDomain, yDomain, xTicks, yTicks, chartBox, {
    x: "Plastic strain (ANSYS)",
    y: `Stress (${stressUnit})`,
  });

  const strainScaled = renderPoints(strainPairs, xDomain, yDomain, chartBox);
  powerCurveStrain.setAttribute(
    "points",
    strainScaled.map((point) => `${point.x},${point.y}`).join(" "),
  );

  strainScaled.forEach((point) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
    circle.setAttribute("r", 3);
    circle.setAttribute("class", "point");
    powerPoints.appendChild(circle);
  });
}

function buildAutoFillKey(pairs) {
  if (!pairs || pairs.length === 0) {
    return "empty";
  }
  const first = pairs[0];
  const last = pairs[pairs.length - 1];
  return `${pairs.length}:${first.x},${first.y}:${last.x},${last.y}`;
}

function autoFillInputs(pairs, baseModulus, force) {
  if (!force) {
    return;
  }

  if (baseModulus && elasticModulusInput) {
    elasticModulusInput.value = formatInputValue(baseModulus.slope, 2);
  }
  if (plasticStrainStepInput) {
    plasticStrainStepInput.value = "0.005";
  }

  if (powerPointsInput) {
    powerPointsInput.value = "13";
  }

  if (pairs && pairs.length > 1) {
    const yieldPoint = baseModulus ? estimateOffsetYield(pairs, baseModulus) : null;
    const utsPoint = pairs.reduce(
      (max, pair) => (pair.y > max.y ? pair : max),
      pairs[0],
    );
    const hardening = baseModulus ? estimatePowerHardening(pairs, baseModulus) : null;

    if (powerYieldInput) {
      powerYieldInput.value = yieldPoint ? formatInputValue(yieldPoint.y, 2) : "";
    }
    if (powerModulusInput) {
      powerModulusInput.value = baseModulus ? formatInputValue(baseModulus.slope, 2) : "";
    }
    if (powerUtsInput) {
      powerUtsInput.value = utsPoint ? formatInputValue(utsPoint.y, 2) : "";
    }
    if (powerCoeffInput) {
      powerCoeffInput.value =
        hardening && hardening.K !== null ? formatInputValue(hardening.K, 2) : "";
    }
    if (powerExponentInput) {
      powerExponentInput.value =
        hardening && hardening.n !== null ? formatInputValue(hardening.n, 4) : "";
    }
    markPowerDatasetDirty();
  }
}

function renderDataTable(pairs, modulusValue) {
  if (!dataTableBody || !dataTableStatus) {
    return;
  }
  dataTableBody.innerHTML = "";
  if (!pairs || pairs.length === 0) {
    dataTableStatus.textContent = "Awaiting data...";
    return;
  }

  const fragment = document.createDocumentFragment();
  pairs.forEach((pair, index) => {
    const row = document.createElement("tr");
    const { trueStrain, trueStress } = computeTrueStrainStress(pair);
    const plasticStrain =
      trueStrain !== null && modulusValue
        ? trueStrain - trueStress / modulusValue
        : null;

    const cells = [
      String(index + 1),
      formatMaybe(pair.x, 6),
      formatMaybe(pair.y, 2),
      formatMaybe(trueStrain, 6),
      formatMaybe(trueStress, 2),
      formatMaybe(plasticStrain, 6),
    ];

    cells.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    fragment.appendChild(row);
  });

  dataTableBody.appendChild(fragment);
  dataTableStatus.textContent = `${pairs.length} rows`;
}

function formatMaybe(value, digits) {
  if (value === null || !Number.isFinite(value)) {
    return "--";
  }
  return value.toFixed(digits);
}

function renderDataPlot(pairs, modulusValue) {
  if (!dataPlotGrid || !dataPlotAxes || !dataPlotCurve || !dataPlotPoints) {
    return;
  }
  dataPlotGrid.innerHTML = "";
  dataPlotAxes.innerHTML = "";
  dataPlotPoints.innerHTML = "";
  dataPlotCurve.setAttribute("points", "");
  if (dataPlotFit) {
    dataPlotFit.setAttribute("points", "");
  }
  if (dataPlotOffset) {
    dataPlotOffset.setAttribute("points", "");
  }
  if (!pairs || pairs.length === 0) {
    dataPlotStatus.textContent = "Awaiting data...";
    return;
  }

  const mode = dataPlotSelect ? dataPlotSelect.value : "stress";
  const fitMode = dataPlotFitSelect ? dataPlotFitSelect.value : "none";
  const plotLogLog = fitMode === "loglog";
  const stressUnit = stressUnitSelect.value;
  const baseFit = estimateYoungsModulus(pairs);
  const yieldPoint = baseFit ? estimateOffsetYield(pairs, baseFit) : null;
  const utsIndex = findUtsIndex(pairs);
  const filterMode = mode === "yieldRange" || mode === "utsRange";
  const plotted = [];
  const showElasticFit = mode === "elasticFit";
  const showYieldFit = mode === "yieldRange" && baseFit;
  const showOffset = mode === "yieldRange" && baseFit;
  if (showElasticFit) {
    if (!baseFit || !baseFit.pairs || baseFit.pairs.length < 2) {
      dataPlotStatus.textContent = "Elastic fit not available.";
      return;
    }
    baseFit.pairs.forEach((pair) => {
      plotted.push({ x: pair.x, y: pair.y, label: `Stress (${stressUnit})`, index: null });
    });
  } else {
    pairs.forEach((pair, index) => {
      const { trueStrain, trueStress } = computeTrueStrainStress(pair);
      let yValue = null;
      let yLabel = "";
      let xValue = pair.x;
      if (filterMode) {
        yValue = pair.y;
        yLabel = `Stress (${stressUnit})`;
      } else if (mode === "stress") {
        yValue = pair.y;
        yLabel = `Stress (${stressUnit})`;
      } else if (mode === "trueStress") {
        yValue = trueStress;
        yLabel = `True stress (${stressUnit})`;
      } else if (mode === "trueStrain") {
        yValue = trueStrain;
        yLabel = "True strain";
      } else if (mode === "truePlasticStress") {
        if (trueStrain !== null && modulusValue) {
          yValue = trueStress;
          yLabel = `True stress (${stressUnit})`;
        }
      } else if (mode === "plasticStrain") {
        yValue =
          trueStrain !== null && modulusValue ? trueStrain - trueStress / modulusValue : null;
        yLabel = "Plastic strain (true)";
      }
      if (mode === "truePlasticStress" && trueStrain !== null && modulusValue) {
        const plasticStrain = trueStrain - trueStress / modulusValue;
        yLabel = `True stress (plastic region) (${stressUnit})`;
        if (!Number.isFinite(plasticStrain) || plasticStrain < 0) {
          return;
        }
        if (yValue === null || !Number.isFinite(yValue)) {
          return;
        }
        if (!yieldPoint || pair.y < yieldPoint.y || index > utsIndex) {
          return;
        }
        xValue = plasticStrain;
        plotted.push({ x: xValue, y: yValue, label: yLabel, index });
        return;
      }

      if (yValue === null || !Number.isFinite(yValue)) {
        return;
      }
      if (filterMode) {
        if (mode === "yieldRange") {
          if (!yieldPoint || pair.y > yieldPoint.y) {
            return;
          }
        } else if (mode === "utsRange") {
          if (index > utsIndex) {
            return;
          }
        }
      }
      if (
        mode === "plasticStrain" &&
        (!yieldPoint || pair.y < yieldPoint.y || index > utsIndex)
      ) {
        return;
      }
      if (plotLogLog) {
        if (xValue <= 0 || yValue <= 0) {
          return;
        }
        plotted.push({
          x: Math.log(xValue),
          y: Math.log(yValue),
          label: yLabel,
          index,
        });
        return;
      }
      plotted.push({ x: xValue, y: yValue, label: yLabel, index });
    });
  }

  if (plotted.length < 2) {
    dataPlotStatus.textContent =
      (mode === "plasticStrain" || mode === "truePlasticStress") && !modulusValue
        ? "Enter E to plot plastic values."
        : plotLogLog
        ? "Log-log requires positive x and y values."
        : mode === "truePlasticStress" && !yieldPoint
        ? "Yield point not available."
        : filterMode && !yieldPoint
        ? "Yield point not available."
        : "Not enough points to plot.";
    return;
  }

  const xDomain = extent(plotted.map((pair) => pair.x));
  const yDomain = extent(plotted.map((pair) => pair.y));
  const xTicks = 4;
  const yTicks = 4;
  let yLabel = plotted[0].label;
  let xLabel = mode === "truePlasticStress" ? "True plastic strain" : "Strain";
  if (plotLogLog) {
    yLabel = `ln(${yLabel})`;
    xLabel = `ln(${xLabel})`;
  }

  renderGrid(dataPlotGrid, xTicks, yTicks, chartBox);
  renderAxes(dataPlotAxes, xDomain, yDomain, xTicks, yTicks, chartBox, {
    x: xLabel,
    y: yLabel,
  });

  const scaled = renderPoints(plotted, xDomain, yDomain, chartBox);
  const points = scaled.map((point) => `${point.x},${point.y}`).join(" ");
  dataPlotCurve.setAttribute("points", points);
  if (dataPlotFit) {
    dataPlotFit.parentNode?.appendChild(dataPlotFit);
  }

  scaled.forEach((point, i) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
    circle.setAttribute("r", 2.5);
    circle.setAttribute("class", "point");
    const originalIndex = plotted[i]?.index;
    if (originalIndex !== null && originalIndex > utsIndex) {
      circle.classList.add("post-uts");
    }
    dataPlotPoints.appendChild(circle);
  });

  if (showOffset && baseFit && dataPlotOffset) {
    const offsetPoints = [
      { x: xDomain[0], y: baseFit.slope * (xDomain[0] - 0.002) },
      { x: xDomain[1], y: baseFit.slope * (xDomain[1] - 0.002) },
    ];
    const offsetScaled = renderPoints(offsetPoints, xDomain, yDomain, chartBox);
    dataPlotOffset.setAttribute(
      "points",
      offsetScaled.map((point) => `${point.x},${point.y}`).join(" "),
    );
  }

  if (showYieldFit && baseFit && dataPlotFit) {
    const minX = xDomain[0];
    const maxX = xDomain[1];
    const fitPoints = [
      { x: minX, y: baseFit.slope * minX + baseFit.intercept },
      { x: maxX, y: baseFit.slope * maxX + baseFit.intercept },
    ];
    const fitScaled = renderPoints(fitPoints, xDomain, yDomain, chartBox);
    const fitLine = fitScaled.map((point) => `${point.x},${point.y}`).join(" ");
    dataPlotFit.setAttribute("points", fitLine);
  }

  let plotStatus = `${plotted.length} points plotted`;
  if (plotLogLog) {
    const regression = linearRegression(plotted);
    if (regression) {
      const minX = xDomain[0];
      const maxX = xDomain[1];
      const fitPoints = [
        { x: minX, y: regression.slope * minX + regression.intercept },
        { x: maxX, y: regression.slope * maxX + regression.intercept },
      ];
      const fitScaled = renderPoints(fitPoints, xDomain, yDomain, chartBox);
      const fitLine = fitScaled.map((point) => `${point.x},${point.y}`).join(" ");
      if (dataPlotFit) {
        dataPlotFit.setAttribute("points", fitLine);
      }
      plotStatus = `Log-log: y=exp(${regression.intercept.toFixed(2)})x^${regression.slope.toFixed(2)} | R2 ${regression.r2.toFixed(4)} | ${plotted.length} pts`;
    } else {
      plotStatus = "Log-log fit unavailable.";
    }
  } else if (showElasticFit && baseFit) {
    const minX = xDomain[0];
    const maxX = xDomain[1];
    const fitPoints = [
      { x: minX, y: baseFit.slope * minX + baseFit.intercept },
      { x: maxX, y: baseFit.slope * maxX + baseFit.intercept },
    ];
    const fitScaled = renderPoints(fitPoints, xDomain, yDomain, chartBox);
    const fitLine = fitScaled.map((point) => `${point.x},${point.y}`).join(" ");
    if (dataPlotFit) {
      dataPlotFit.setAttribute("points", fitLine);
    }
    plotStatus = `Linear fit: y=${baseFit.slope.toFixed(2)}x ${formatSigned(baseFit.intercept)} | R2 ${baseFit.r2.toFixed(4)} | ${plotted.length} pts`;
  } else {
    if (fitMode !== "none") {
      const fitPairs = plotted.map((pair) => ({
        x:
          mode === "truePlasticStress" && pair.plasticX !== undefined
            ? pair.plasticX
            : pair.x,
        y: pair.y,
      }));
      const regression = buildRegressionFit(fitPairs, fitMode);
      if (regression && regression.fitPoints && regression.fitPoints.length > 0) {
        const fitScaled = renderPoints(regression.fitPoints, xDomain, yDomain, chartBox);
        const fitLine = fitScaled.map((point) => `${point.x},${point.y}`).join(" ");
        if (dataPlotFit) {
          dataPlotFit.setAttribute("points", fitLine);
        }
        plotStatus = `${regression.label} | R2 ${regression.r2.toFixed(4)} | ${plotted.length} pts`;
      } else if (regression && regression.error) {
        plotStatus = regression.error;
      }
    }
  }
  dataPlotStatus.textContent = plotStatus;
}

function readPlasticStrainStep(allowPendingZero = true) {
  const raw = plasticStrainStepInput.value.trim();
  if (raw.length === 0) {
    return { value: null };
  }
  if (raw === "." || raw === "-" || raw === "-.") {
    return { value: null };
  }
  const normalized = raw.replace(",", ".");
  if (allowPendingZero && /^[-+]?0*\.?0*$/.test(normalized)) {
    return { value: null, pending: true };
  }
  const value = Number(normalized);
  if (!Number.isFinite(value) || value <= 0) {
    return { error: "Plastic output strain step must be a positive number." };
  }
  return { value };
}

function buildPlasticOutput(
  pairs,
  modulusValue,
  stressUnit,
  cubic,
  yieldTrueStrain,
  yieldTrueStress,
  plasticStrainStep,
) {
  const header = `plastic_strain,true_stress (${stressUnit})`;
  const sorted = [...pairs].sort((a, b) => a.x - b.x);
  if (sorted.length === 0) {
    return header;
  }
  const eps = 1e-12;

  const minStrain = sorted[0].x;
  const maxStrain = sorted[sorted.length - 1].x;
  const stressFromCubic = (strain) =>
    cubic.a * strain ** 3 + cubic.b * strain ** 2 + cubic.c * strain + cubic.d;
  const rawPlasticFromStrain = (strain) => strain - stressFromCubic(strain) / modulusValue;

  const targetYieldStress =
    Number.isFinite(yieldTrueStress) ? Math.round(yieldTrueStress) : null;

  let baseStrain = minStrain;
  if (Number.isFinite(yieldTrueStrain)) {
    baseStrain = Math.min(Math.max(yieldTrueStrain, minStrain), maxStrain);
  }
  if (targetYieldStress !== null) {
    let bestDiff = Infinity;
    let bestStrain = baseStrain;
    sorted.forEach((pair) => {
      if (Number.isFinite(yieldTrueStrain) && pair.x + eps < yieldTrueStrain) {
        return;
      }
      const predicted = stressFromCubic(pair.x);
      const diff = Math.abs(predicted - targetYieldStress);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestStrain = pair.x;
      }
    });
    baseStrain = bestStrain;
  }

  const baseStress = targetYieldStress !== null ? targetYieldStress : stressFromCubic(baseStrain);
  const basePlasticStrain = baseStrain - baseStress / modulusValue;

  let maxPlasticStrain = rawPlasticFromStrain(maxStrain) - basePlasticStrain;
  if (!Number.isFinite(maxPlasticStrain) || maxPlasticStrain < 0) {
    maxPlasticStrain = 0;
  }

  const targets = [0];
  if (plasticStrainStep && maxPlasticStrain > eps) {
    const maxRows = 10000;
    const stepCount = Math.floor(maxPlasticStrain / plasticStrainStep);
    const cappedSteps = Math.min(stepCount, maxRows - 2);
    for (let i = 1; i <= cappedSteps; i += 1) {
      targets.push(i * plasticStrainStep);
    }
    const last = targets[targets.length - 1];
    if (targets.length < maxRows && Math.abs(maxPlasticStrain - last) > eps) {
      targets.push(maxPlasticStrain);
    }
  } else {
    sorted.forEach((pair) => {
      if (pair.x + eps < baseStrain) {
        return;
      }
      const plasticStrain = rawPlasticFromStrain(pair.x) - basePlasticStrain;
      if (!Number.isFinite(plasticStrain) || plasticStrain <= eps) {
        return;
      }
      targets.push(plasticStrain);
    });
    targets.sort((a, b) => a - b);
  }

  const lowerBound = baseStrain;
  const upperBound = maxStrain;
  const plasticLower = rawPlasticFromStrain(lowerBound);
  const plasticUpper = rawPlasticFromStrain(upperBound);
  const increasing = plasticUpper >= plasticLower;
  const solveStrain = (targetRawPlasticStrain) => {
    if (!Number.isFinite(targetRawPlasticStrain)) {
      return lowerBound;
    }
    if (increasing) {
      if (targetRawPlasticStrain <= plasticLower) {
        return lowerBound;
      }
      if (targetRawPlasticStrain >= plasticUpper) {
        return upperBound;
      }
    } else {
      if (targetRawPlasticStrain >= plasticLower) {
        return lowerBound;
      }
      if (targetRawPlasticStrain <= plasticUpper) {
        return upperBound;
      }
    }

    let left = lowerBound;
    let right = upperBound;
    for (let i = 0; i < 70; i += 1) {
      const mid = (left + right) / 2;
      const value = rawPlasticFromStrain(mid);
      if (!Number.isFinite(value)) {
        break;
      }
      const goRight = increasing ? value < targetRawPlasticStrain : value > targetRawPlasticStrain;
      if (goRight) {
        left = mid;
      } else {
        right = mid;
      }
    }
    return (left + right) / 2;
  };

  const lines = [];
  lines.push(`0.000000,${baseStress.toFixed(2)}`);
  targets.slice(1).forEach((plasticStrain) => {
    const strain = solveStrain(plasticStrain + basePlasticStrain);
    const stress = stressFromCubic(strain);
    if (!Number.isFinite(stress)) {
      return;
    }
    lines.push(`${plasticStrain.toFixed(6)},${stress.toFixed(2)}`);
  });

  return [header, ...lines].join("\n");
}


function applyRange(pairs, range, axis) {
  if (!axis || (range.min === null && range.max === null)) {
    return { pairs };
  }

  const filtered = pairs.filter((pair) => {
    const value = axis === "strain" ? pair.x : pair.y;
    if (range.min !== null && value < range.min) {
      return false;
    }
    if (range.max !== null && value > range.max) {
      return false;
    }
    return true;
  });

  return { pairs: filtered };
}

function updateDisplay(raw, range, lineRange, autoFitRange, rangeAxis) {
  input.value = formatLinesWithNumbers(raw, range, lineRange, autoFitRange, rangeAxis);
}

function formatLinesWithNumbers(raw, range, lineRange, autoFitRange, rangeAxis) {
  if (!raw || raw.trim().length === 0) {
    return "";
  }

  const lines = raw.trim().split(/\r?\n/);
  const dataLines = getDataLines(raw);
  const width = String(dataLines.length || 1).length;
  const hasRange = rangeAxis && (range.min !== null || range.max !== null);
  const hasLineRange = lineRange && lineRange.active;
  const hasAutoFitRange =
    !hasLineRange &&
    !hasRange &&
    autoFitRange &&
    Number.isFinite(autoFitRange.minX) &&
    Number.isFinite(autoFitRange.maxX);
  let lineNumber = 0;
  let headerSkipped = false;

  return lines
    .map((line) => {
      if (line.trim().length === 0) {
        return line;
      }

      let marker = "  ";
      const isHeader = shouldSkipHeader(raw) && !headerSkipped;
      if (isHeader) {
        headerSkipped = true;
        return line;
      }

      lineNumber += 1;
      if (hasLineRange) {
        if (lineNumber >= lineRange.from && lineNumber <= lineRange.to) {
          marker = ">>";
        }
      } else if (hasRange) {
        const pair = parseLinePair(line);
        const value = pair ? (rangeAxis === "strain" ? pair.x : pair.y) : null;
        if (value !== null && inRange(value, range)) {
          marker = ">>";
        }
      } else if (hasAutoFitRange) {
        const pair = parseLinePair(line);
        if (pair && pair.x >= autoFitRange.minX && pair.x <= autoFitRange.maxX) {
          marker = ">>";
        }
      }

      return `${marker} ${String(lineNumber).padStart(width, " ")} | ${line}`;
    })
    .join("\n");
}

function parseLinePair(line) {
  const parts = line.split(/[\t,]/);
  if (parts.length < 2) {
    return null;
  }

  const x = Number(parts[0].trim());
  const y = Number(parts[1].trim());
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return null;
  }

  return { x, y };
}

function inRange(value, range) {
  if (range.min !== null && value < range.min) {
    return false;
  }
  if (range.max !== null && value > range.max) {
    return false;
  }
  return true;
}

function updateControlsState() {
  const hasData = (rawData || input.value).trim().length > 0;
  const rangeInputsFilled =
    stressMinInput.value.trim().length > 0 || stressMaxInput.value.trim().length > 0;
  const strainRangeInputsFilled =
    strainMinInput.value.trim().length > 0 || strainMaxInput.value.trim().length > 0;
  const lineInputsFilled =
    lineFromInput.value.trim().length > 0 || lineToInput.value.trim().length > 0;

  applyRangeBtn.disabled = !hasData;
  input.classList.toggle("has-data", hasData);
  clearRangeBtn.disabled = !stressRangeActive && !rangeInputsFilled;
  selectAllRangeBtn.disabled = !hasData;
  selectYieldRangeBtn.disabled = !hasData;
  selectUtsRangeBtn.disabled = !hasData;
  selectPlasticRangeBtn.disabled = !hasData;
  applyStrainRangeBtn.disabled = !hasData;
  clearStrainRangeBtn.disabled = !strainRangeActive && !strainRangeInputsFilled;
  selectAllStrainRangeBtn.disabled = !hasData;
  selectYieldStrainRangeBtn.disabled = !hasData;
  selectUtsStrainRangeBtn.disabled = !hasData;
  selectPlasticStrainRangeBtn.disabled = !hasData;
  applyLineRangeBtn.disabled = !hasData;
  clearLineRangeBtn.disabled = !lineRangeActive && !lineInputsFilled;
  selectAllLineRangeBtn.disabled = !hasData;
  selectYieldLineRangeBtn.disabled = !hasData;
  selectUtsLineRangeBtn.disabled = !hasData;
  selectPlasticLineRangeBtn.disabled = !hasData;

  const rangeActive = stressRangeActive || strainRangeActive;

  if (elasticLineOverride) {
    const note = rangeActive ? " (range disabled)" : "";
    selectionStatus.textContent = `Fit source: line range (${elasticLineOverride.length} points)${note}.`;
    return;
  }
  if (elasticRangeOverride) {
    const note = lineRangeActive ? " (line range disabled)" : "";
    const rangeLabel = elasticRangeAxis === "strain" ? "strain" : "stress";
    selectionStatus.textContent = `Fit source: ${rangeLabel} range (${elasticRangeOverride.length} points)${note}.`;
    return;
  }
  selectionStatus.textContent = "Fit source: auto-selection.";
}

function getDataLines(raw) {
  const withoutDecorations = stripDecorations(raw);
  const lines = withoutDecorations.split(/\r?\n/);
  const dataLines = [];
  let headerSkipped = false;

  for (const line of lines) {
    if (line.trim().length === 0) {
      continue;
    }
    if (shouldSkipHeader(raw) && !headerSkipped) {
      headerSkipped = true;
      continue;
    }
    dataLines.push(line);
  }

  return dataLines;
}

function readLineRange(raw) {
  if (!lineRangeActive) {
    return { active: false };
  }

  const fromValue = lineFromInput.value.trim();
  const toValue = lineToInput.value.trim();

  if (fromValue === "" && toValue === "") {
    return { active: false };
  }

  const from = Number(fromValue);
  const to = Number(toValue);

  if (!Number.isInteger(from) || !Number.isInteger(to)) {
    return { error: "Line range must be whole numbers." };
  }

  const dataLines = getDataLines(raw);
  const maxLine = dataLines.length;

  if (from < 1 || to < 1) {
    return { error: "Line range must be >= 1." };
  }

  if (from > maxLine || to > maxLine) {
    return { error: `Line range must be <= ${maxLine}.` };
  }

  if (to <= from) {
    return { error: "Line range end must be greater than start." };
  }

  const selectedLines = dataLines.slice(from - 1, to);
  const pairs = [];
  for (const line of selectedLines) {
    const pair = parseLinePair(line);
    if (!pair) {
      return { error: "Selected line range has invalid numeric data." };
    }
    pairs.push(pair);
  }

  if (pairs.length < selectionConfig.minPoints) {
    return {
      error: `Line range must be at least ${selectionConfig.minPoints} points.`,
    };
  }

  return { active: true, pairs, from, to };
}

function estimateYieldPoint(pairs) {
  const fit = estimateYoungsModulus(pairs);
  if (!fit) {
    return null;
  }
  return estimateOffsetYield(pairs, fit);
}

function getAutoFitRange(pairs) {
  const fit = estimateYoungsModulus(pairs);
  if (!fit || !fit.pairs || fit.pairs.length === 0) {
    return null;
  }
  const xs = fit.pairs.map((pair) => pair.x);
  return { minX: Math.min(...xs), maxX: Math.max(...xs) };
}

function minStress(pairs) {
  return pairs.reduce((min, pair) => Math.min(min, pair.y), pairs[0].y);
}

function minStrain(pairs) {
  return pairs.reduce((min, pair) => Math.min(min, pair.x), pairs[0].x);
}

function findYieldLineIndex(lines, yieldPointData) {
  for (let i = 0; i < lines.length; i += 1) {
    const pair = parseLinePair(lines[i]);
    if (!pair) {
      continue;
    }
    if (pair.x >= yieldPointData.x) {
      return i;
    }
  }
  return null;
}

function findUtsLineIndex(lines) {
  let maxStress = null;
  let index = null;
  for (let i = 0; i < lines.length; i += 1) {
    const pair = parseLinePair(lines[i]);
    if (!pair) {
      continue;
    }
    if (maxStress === null || pair.y > maxStress) {
      maxStress = pair.y;
      index = i;
    }
  }
  return index;
}

function loadReferenceDataset() {
  fetch(referenceDataset.path)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to load reference dataset.");
      }
      return response.text();
    })
    .then((text) => {
      const trimmed = text.trim();
      if (!trimmed) {
        throw new Error("Reference dataset is empty.");
      }
      referenceLoaded = true;
      regionFitMode = "default";
      stressUnitSelect.value = referenceDataset.unit;
      hasHeaderCheckbox.checked = referenceDataset.hasHeader;
      input.value = trimmed;
      rawData = trimmed;
      if (referenceInfo) {
        referenceInfo.textContent = `Loaded ${referenceDataset.path} (${referenceDataset.unit}).`;
      }
      setFeedback(`Loaded reference dataset: ${referenceDataset.name}.`);
      plotFromRaw(trimmed);
      updateControlsState();
    })
    .catch((error) => {
      referenceLoaded = false;
      regionFitMode = "default";
      if (referenceInfo) {
        referenceInfo.textContent = "Loads Al2024-T351.csv with its header row (MPa units).";
      }
      setFeedback(error.message || "Unable to load reference dataset.");
    });
}

// Seed with example
input.value = "0,0, 0.01,120, 0.02,215, 0.03,290, 0.04,310";
plotFromRaw(input.value);
updateControlsState();
