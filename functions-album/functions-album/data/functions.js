/* ------------------------------------------------------------------
   FUNCTIONS ALBUM — CONTENT FILE
   Edit THIS file to fill in your album. The page builds itself from it.

   For each function, fill in the fields that are still `""` / `[]`:
     equation     – your exact fitted equation (LaTeX), e.g. "y = 0.6x + 0.2"
     points       – the 2 photo points you used, e.g. ["(-3, -1.6)", "(4, 2.6)"]
     derivation   – algebra steps (one string per line, LaTeX allowed)
     paragraph1   – transformation mapping rationale & what a, k, d, c mean
     paragraph2   – physical domain/range bounds & where the object breaks
                    away from the pure math model
     domain/range – the restricted bounds for YOUR photo (interval notation)
     video        – link to your 1–2 min Desmos screen recording (optional)

   Write it in your own words: each of you will explain 1–2 of these
   functions live in the oral defence.
------------------------------------------------------------------- */

window.ALBUM = {
  title: "Functions in the Wild",
  course: "MHF4U Advanced Functions · Real-World Functions Culminating Task",
  location: "Sunway, Malaysia",
  members: [], // e.g. ["Name 1", "Name 2", "Name 3"]

  functions: [
    {
      id: "linear", name: "Linear", band: "orange",
      parent: "y = x",
      parentFacts: { domain: "x \\in \\mathbb{R}", range: "y \\in \\mathbb{R}", asymptotes: "None", note: "Constant rate of change; the graph is a straight line." },
      spot: "The handrail running up the stairwell.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    },
    {
      id: "absolute", name: "Absolute Value", band: "blue",
      parent: "y = |x|",
      parentFacts: { domain: "x \\in \\mathbb{R}", range: "y \\geq 0", asymptotes: "None", note: "V-shape with a sharp vertex; symmetric about the y-axis." },
      spot: "The glass door with its V-shaped colour panels.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    },
    {
      id: "reciprocal", name: "Reciprocal", band: "green",
      parent: "y = \\dfrac{1}{x}",
      parentFacts: { domain: "x \\neq 0", range: "y \\neq 0", asymptotes: "x = 0 (vertical), y = 0 (horizontal)", note: "Two branches; never touches either axis." },
      spot: "The window frame and railings overlooking the street.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    },
    {
      id: "rational", name: "Rational", band: "cream",
      parent: "y = \\dfrac{P(x)}{Q(x)}",
      parentFacts: { domain: "Q(x) \\neq 0", range: "Depends on degrees of P and Q", asymptotes: "Vertical where Q(x) = 0; horizontal or oblique from degrees", note: "A ratio of two polynomials; holes appear where a factor cancels." },
      spot: "The two chairs and the staircase edge.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    },
    {
      id: "cubic", name: "Polynomial (Cubic)", band: "orange",
      parent: "y = x^3",
      parentFacts: { domain: "x \\in \\mathbb{R}", range: "y \\in \\mathbb{R}", asymptotes: "None", note: "Odd degree: opposite end behaviour, a point of inflection at the origin." },
      spot: "The slanted escalator rail.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    },
    {
      id: "tangent", name: "Trig with Asymptotes", band: "blue",
      parent: "y = \\tan x",
      parentFacts: { domain: "x \\neq \\dfrac{\\pi}{2} + n\\pi,\\ n \\in \\mathbb{Z}", range: "y \\in \\mathbb{R}", asymptotes: "x = \\dfrac{\\pi}{2} + n\\pi", note: "Period \\pi; repeating branches between vertical asymptotes." },
      spot: "The row of balusters on the balcony.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    },
    {
      id: "sine", name: "Sinusoidal", band: "green",
      parent: "y = \\sin x",
      parentFacts: { domain: "x \\in \\mathbb{R}", range: "-1 \\leq y \\leq 1", asymptotes: "None", note: "Period 2\\pi, amplitude 1, midline y = 0." },
      spot: "The honeycomb paving stones underfoot.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    },
    {
      id: "exponential", name: "Exponential", band: "cream",
      parent: "y = 2^x",
      parentFacts: { domain: "x \\in \\mathbb{R}", range: "y > 0", asymptotes: "y = 0 (horizontal)", note: "Always positive; grows without bound as x increases." },
      spot: "The sweeping escalator curve at Sunway College.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    },
    {
      id: "logarithm", name: "Logarithmic", band: "orange",
      parent: "y = \\log_2 x",
      parentFacts: { domain: "x > 0", range: "y \\in \\mathbb{R}", asymptotes: "x = 0 (vertical)", note: "Inverse of the exponential; grows slowly and never touches the y-axis." },
      spot: "The curved road arrow in the car park.",
      equation: "", points: [], derivation: [], paragraph1: "", paragraph2: "",
      domain: "", range: "", video: ""
    }
  ]
};
