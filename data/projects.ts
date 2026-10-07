export const projects = [
  {
    title: "LU Dense Solver",
    slug: "lu-dense-solver",
    date: "January 2025 - May 2025",
    description:
      "Investigated GPU acceleration for dense linear systems through CPU, naive CUDA, and optimized CUDA implementations of LU decomposition, achieving approximately 40–41× end-to-end speedup on a 5000 × 5000 benchmark.",
    tags: ["CUDA", "C++"],
    github: "https://github.com/Sase8410/GPU-Project",
    status: "Completed",
    sections: [
      {
        heading: "Project Overview",
        text: "This project investigates the computational cost of solving large dense linear systems of the form Ax = b, where A is a square coefficient matrix, b is a known right-hand-side vector, and x is the unknown solution. Such systems arise in numerical modeling and engineering calculations in which many variables interact. Because a dense matrix stores entries throughout its dimensions, both arithmetic work and memory requirements grow rapidly with problem size.\n\nThe study compares a CPU baseline with naive and optimized CUDA implementations to examine how much of this workload can benefit from GPU parallelism. The objective is to accelerate the complete solution process while understanding the relationship between algorithmic dependencies, memory movement, and measured execution time.",
      },
      {
        heading: "How It Works",
        text: "LU decomposition expresses the coefficient matrix as the product of a lower triangular matrix L and an upper triangular matrix U. Once these factors are available, the original system is solved in two stages: forward substitution solves Ly = b for an intermediate vector y, and backward substitution solves Ux = y for x. This separates the expensive factorization from the subsequent triangular solves.\n\nDuring elimination, a pivot is used to construct multipliers that remove entries below the diagonal. Those multipliers then update the remaining matrix entries. Dense LU factorization requires work that grows approximately with the cube of the matrix dimension, whereas each triangular solve grows quadratically. The comparison therefore centers on accelerating elimination while accounting for the additional work required to return a solution.",
      },
      {
        heading: "GPU Implementation",
        text: "The CUDA implementation distributes independent matrix updates across GPU threads. At a given elimination stage, many entries in the remaining submatrix can be updated concurrently once the required pivot information and multipliers are available. However, successive elimination stages are dependent: a later stage must use values produced by earlier updates. The available parallelism therefore lies primarily within each stage rather than across the entire sequence of pivots.\n\nThe optimized version uses shared-memory tiling and improved memory access to reduce the cost of repeatedly accessing matrix values. Tiling allows threads in a block to cooperate on portions of the matrix and reuse data closer to the processors. These optimizations address data movement as well as arithmetic throughput; their value depends on whether the reduction in memory traffic outweighs coordination and execution overhead.",
      },
      {
        heading: "Results",
        text: "For the reported 5000 × 5000 benchmark, the CPU implementation required approximately 120.4 seconds, compared with 4.68 seconds for the naive CUDA version and approximately 3.0 seconds for the optimized version. Using these rounded measurements, the naive implementation achieved about 25.7× speedup over the CPU baseline, while the optimized implementation achieved about 40.1×, consistent with the project's approximate 40–41× reported result.\n\nRelative to naive CUDA, the optimized version reduced total runtime by approximately 36%, corresponding to an additional 1.56× speedup. These measurements demonstrate the benefit of both GPU execution and implementation refinement for the evaluated workload. They characterize this benchmark and its implementations; performance at other matrix sizes or on different hardware requires separate measurement.",
      },
      {
        heading: "Challenges and Lessons",
        text: "A central challenge was distinguishing improvements in the LU kernel from improvements in the complete solver. Total runtime includes work outside factorization, such as allocation, memory transfers, and other solution stages. A substantially faster kernel can therefore produce a smaller end-to-end improvement when these remaining costs occupy a significant portion of execution.\n\nThe project reinforced the importance of identifying which operations are independent, placing reusable data efficiently, and measuring performance at a scope that matches the intended claim. It also separates speed from numerical reliability: execution time alone does not establish solution accuracy or robustness for poorly conditioned matrices. Numerical validation and a clearly documented treatment of pivots remain distinct considerations when assessing a solver's suitability for scientific use.",
      },
    ],
  },
    {
    title: "Amazon Review Opinion Search Engine",
    slug: "amazon-review-opinion-search-engine",
    date: "June 2025 - August 2025",
    description:
      "Developed a Python information retrieval system for attribute- and opinion-focused product review search, comparing retrieval approaches through manual Precision@k evaluation and iterative query refinement.",
    tags: ["Python"],
    github:
      "https://github.com/Sase8410/Amazon-Opinion-Search-Engine-NLP-Project-",
    status: "Completed",
    sections: [
      {
        heading: "Project Overview",
        text:
          "This project examines how an information retrieval system can help users locate customer reviews that address a particular product attribute or experience. A useful result must do more than mention the product: it must contain evidence relevant to the user's question. For example, a review that mentions battery life may still be unhelpful if the query specifically asks whether the battery lasts through extended use.\n\nThe research objective is to assess how different retrieval approaches translate a written query into a ranked set of reviews. The emphasis is on relevance near the top of the ranking, where users are most likely to read, and on understanding discrepancies between shared vocabulary and the underlying information need.",
      },
      {
        heading: "Implementation",
        text:
          "The Python workflow accepts a user query, evaluates candidate reviews using the implemented retrieval approaches, and returns results ordered by their relevance scores. Comparing multiple models makes it possible to inspect how different ranking rules change the evidence presented to the user, even when the underlying review collection and query remain the same.\n\nQuery refinement provides an additional way to examine retrieval behavior. Changes to attribute names, descriptive terms, or opinion wording can alter which reviews receive high scores. Inspecting these changes helps identify cases in which a model responds strongly to matching words but retrieves passages that fail to answer the intended question. This makes review-level error analysis an essential complement to numerical evaluation.",
      },
      {
        heading: "Evaluation",
        text:
          "Ranking quality was assessed through manual Precision@k evaluation. For each evaluated query, the first k retrieved reviews were inspected and assigned relevance judgments. Precision@k is the number of relevant reviews in those first k positions divided by k, so it directly measures the proportion of the visible result list that addresses the information need.\n\nThe relevance decision must consider both the requested attribute and the opinion or experience associated with it. Merely mentioning an attribute is insufficient when the query asks about a specific quality. Comparisons are most interpretable when the cutoff k and judgment criteria remain consistent across models. Precision@k evaluates the usefulness of the selected results, but does not measure how many relevant reviews were missed elsewhere in the collection or distinguish different orderings within the top k.",
      },
      {
        heading: "Challenges and Lessons",
        text:
          "The principal difficulty is that linguistic similarity and relevance are related but not identical. Negation can reverse an opinion without substantially changing its vocabulary, while paraphrases can express the same experience through different words. Reviews may also discuss several attributes, making an overall positive or negative tone an unreliable guide to the particular issue raised in a query.\n\nThe project demonstrated why retrieval development benefits from an explicit feedback loop: inspect highly ranked results, identify the source of irrelevant matches, refine the query or approach, and reevaluate. Manual judgments make these errors visible, although their subjectivity and limited coverage constrain the conclusions. Refinements informed by a query set should also be distinguished from performance on previously unseen queries.",
      },
    ],
  },
  {
    title: "Volunteer Management Platform",
    slug: "volunteer-management-platform",
    date: "June 2025 - August 2025",
    description:
      "Contributed to a full-stack volunteer management platform integrating role-based workflows, event coordination, profile-informed matching, assignment tracking, and reporting, with PHPUnit tests for profile validation.",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "SQL"],
    github: "https://github.com/Sase8410/COSC-4353-Project",
    status: "Completed",
    sections: [
      {
        heading: "Project Overview",
        text:
          "This team project addresses the coordination problem faced by nonprofit organizations managing volunteers across multiple events. Volunteer information, event requirements, assignments, and participation records are closely related, yet become difficult to maintain when handled separately. The platform brings these records into a shared application so that coordinators can use a consistent source of information when organizing participation.\n\nThe application supports distinct volunteer and administrator workflows. Volunteer profiles describe skills, preferences, and availability, while administrative tools support event planning and assignment management. Its central objective is to connect participant information with organizational needs and maintain a traceable relationship between an account, an assignment, and the activity associated with it.",
      },
      {
        heading: "Features and Workflows",
        text:
          "The platform includes event creation, volunteer matching, assignment creation, comments, an event timeline, performance views, and administrative role management. These capabilities form a connected workflow: events define the opportunities being coordinated, profiles supply information relevant to participation, and assignments record the association between volunteers and events. Matching considers profile information such as skills, preferences, and availability to support coordinator decisions.\n\nThe event timeline provides a chronological view of activities, while performance views and participation history support reviewing recorded involvement. Comments add contextual information to coordination, and role management determines which users can perform administrative functions. The relationship among these features matters because the usefulness of a later view depends on the completeness and consistency of the records created earlier.",
      },
      {
        heading: "Technical Implementation",
        text:
          "The application uses PHP for backend request handling and business logic, SQL for persistent storage, and HTML, CSS, and JavaScript for the user interface. This division connects browser interactions to server-side processing and stored application records. A submitted form becomes useful organizational data only after the backend interprets its fields and applies the relevant validation and permission rules.\n\nThe data model includes user credentials, user profiles, event details, event assignments, and volunteer history. Credentials represent account access, profiles represent participant information, and event records describe organizational activities. Assignments connect users with events, while history records preserve participation information for later review. Keeping these responsibilities distinct helps clarify where each type of information belongs and how related workflows depend on it.",
      },
      {
        heading: "Validation and Access Control",
        text:
          "Role-based access control separates volunteer capabilities from administrative actions, including event management and role changes. This distinction is important because authenticated users may have different levels of authority: knowing which account is signed in does not, by itself, determine which operations that account should be permitted to perform.\n\nProfile validation was tested with PHPUnit, and Xdebug was used to generate coverage reports. The tests examine the behavior of the validation logic, while coverage indicates which portions of the code were exercised. These provide complementary evidence: assertions evaluate expected behavior, and coverage helps reveal unexamined paths. Coverage alone does not establish correctness, and validation tests do not establish the security or correctness of every application workflow.",
      },
      {
        heading: "Challenges and Lessons",
        text:
          "A key engineering challenge was maintaining consistency across information used by multiple features. Profile changes can affect matching decisions, event changes can affect assignments, and assignment records can influence later participation views. Treating each page as an isolated feature would obscure these dependencies; the shared data model is what connects the application into a coherent system.\n\nThe project provided experience coordinating database design, backend validation, permissions, and interface behavior within a team. It highlighted the value of clearly defined record relationships and shared expectations about inputs and outputs. The resulting platform demonstrates an integrated administrative workflow, while claims about organizational efficiency or usability would require evidence from deployment and user evaluation.",
      },
    ],
  },
  {
    title: "Sparse Matrix Research",
    slug: "sparse-matrix-research",
    date: "August 2025 - December 2025",
    description:
      "Investigated random, banded, and block sparsity in MATLAB to examine how matrix structure affects computational cost and predictive accuracy in an arithmetic model motivated by encrypted machine learning inference.",
    tags: ["MATLAB"],
    github: "https://github.com/Sase8410/Sparse-Matrix-Project",
    status: "Completed",
    sections: [
      {
        heading: "Research Overview",
        text:
          "This research investigates matrix sparsity as a means of reducing computation associated with privacy-preserving machine learning inference. Matrix operations combine many weighted contributions, but a contribution with a zero weight can be omitted when the implementation explicitly exploits that structure. Sparsification therefore changes the workload by selectively removing entries from the matrix used in computation.\n\nThe central research question is how the amount and arrangement of retained information influence the balance between computational efficiency and predictive accuracy. The study is motivated by encrypted inference, where arithmetic can be particularly costly, and examines this trade-off through MATLAB experiments and custom arithmetic. Conclusions must remain tied to the evaluated arithmetic model rather than being interpreted automatically as measurements of a deployed encrypted inference system.",
      },
      {
        heading: "Sparsity Patterns",
        text:
          "The study compares random, banded, and block sparsity. Random sparsity distributes retained entries across the matrix without requiring them to occupy a contiguous region. Banded sparsity retains entries near the main diagonal, imposing a relationship between row and column proximity. Block sparsity retains selected groups of entries, producing larger regions of structured connectivity.\n\nThese patterns separate two aspects of sparsification: how many values remain and where those values occur. Matrices with equal nonzero counts can preserve different relationships and therefore produce different predictive behavior. Their computational behavior may also differ because regular groups of retained values can be processed differently from scattered entries. The comparison treats sparsity as a structural design choice rather than a single percentage of removed weights.",
      },
      {
        heading: "Experimental Approach",
        text:
          "MATLAB was used to construct sparse candidates and evaluate their computational and predictive behavior under the project's custom arithmetic. Each candidate represents a particular selection of retained matrix entries. The nonzero count, nnz(Ws), measures the number of active entries in a sparse candidate Ws; relative to the full matrix size, it also provides a direct description of the degree of sparsification.\n\nFor a matrix with m rows and n columns, the zero fraction can be expressed as 1 − nnz(Ws)/(m × n). This describes the stored pattern, but it does not by itself establish an equivalent runtime reduction. The experiments consider computational measurements alongside accuracy so that reductions in arithmetic are interpreted in relation to their effect on the task being evaluated.",
      },
      {
        heading: "Interpreting the Trade-Off",
        text:
          "Increasing sparsity can reduce the number of weighted contributions evaluated, but can also remove information that supports accurate predictions. The meaningful question is therefore whether a reduction in computational cost justifies the associated change in accuracy. A highly sparse candidate may be unattractive if its predictions deteriorate substantially, while a less sparse candidate may preserve useful behavior at a lower cost than the original matrix.\n\nA Pareto perspective helps express this comparison: a candidate is dominated if another achieves at least as much accuracy at no greater cost and improves at least one of those objectives. This is an interpretation framework rather than a claim of a unique optimum. Arithmetic savings and measured runtime must also be separated, since representation, indexing, and processing overhead affect how efficiently the implementation can exploit zeros.",
      },
      {
        heading: "Lessons and Significance",
        text:
          "The project highlights that computational optimization depends on preserving useful structure while removing unnecessary work. The location of retained entries can matter as much as their number, particularly when a sparsity pattern changes which relationships the computation is able to represent. This connects matrix design directly to the quality of the resulting predictions.\n\nA second lesson concerns the scope of performance claims. Fewer nonzero entries demonstrate a smaller active matrix representation, and fewer evaluated operations demonstrate arithmetic savings, but neither alone proves an equivalent speedup in encrypted execution. The contribution is an experimental framework for comparing sparsity patterns and their efficiency–accuracy trade-offs under the chosen computational model.",
      },
    ],
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    date: "May 2026 - Present",
    description:
      "Designed and developed a Next.js and TypeScript portfolio combining reusable project data, dedicated technical case studies, interactive mathematical graphics, responsive layouts, and a Resend-powered contact workflow.",
    tags: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    github: "", // Add your portfolio repository URL here.
    status: "Completed",
    sections: [
      {
        heading: "Project Overview",
        text:
          "This portfolio presents my mathematics and computer science background through project summaries, detailed technical explanations, and an interactive mathematical visual identity. The site serves two related audiences: visitors who need a quick overview of my work and readers who want to examine the methods, implementation choices, and limitations behind an individual project.\n\nCoordinate planes, graph-paper backgrounds, and plotted equations connect the presentation to my interests in numerical computing and mathematical modeling. The design objective is to make that connection visible while maintaining readable content and clear navigation. Project cards provide an initial point of entry, and dedicated pages allow the technical discussion to expand beyond the space available on the homepage.",
      },
      {
        heading: "Application Structure",
        text:
          "The application is built with Next.js, React, and TypeScript, with Tailwind CSS providing styling. Reusable components organize recurring interface elements so that visual and structural decisions can be maintained consistently across pages. TypeScript supports explicit expectations about the data passed between these components.\n\nA shared project array supplies both homepage cards and individual project pages. Each entry contains identifying metadata, a short description, and structured sections for the longer explanation. A project's slug connects its summary to its dedicated route. This arrangement separates editorial content from page layout, allowing descriptions to evolve without duplicating the rendering logic for every project.",
      },
      {
        heading: "Interactive Design",
        text:
          "The homepage combines animated graph elements with a Desmos-inspired panel that lets visitors interact with the mathematical presentation. React state tracks the selected graph and whether the panel is collapsed, connecting user actions to the visible interface. The equations function as part of the site's identity while also providing a concrete interactive element.\n\nFramer Motion supplies entrance and hover animations, and responsive layout rules adapt spacing and placement to different screen sizes. The principal design constraint is the relationship between movement and legibility: animated graphics should remain compatible with reading, selecting links, and navigating project content. This requires considering the visual density of the graph, the position of text, and the space available to interactive controls.",
      },
      {
        heading: "Contact System",
        text:
          "The contact form collects a visitor's name, email address, and message, then submits those fields to a backend endpoint that supports the Resend email workflow. This connects the browser interface to server-side message processing, giving visitors a direct way to initiate contact from the portfolio.\n\nThe interface displays success or failure feedback after submission so that the visitor can distinguish an accepted request from an unsuccessful attempt. These states are part of the form's behavior, rather than merely visual details: without feedback, a user cannot determine whether to wait, retry, or correct an issue. A successful submission response describes the application's handling of the request; final inbox delivery is a separate stage of the email process.",
      },
      {
        heading: "Challenges and Continued Development",
        text:
          "A recurring challenge is balancing a distinctive visual design with the practical purpose of a professional portfolio. Mathematical graphics and animations need to coexist with clear project descriptions, predictable navigation, and layouts that remain usable when screen space is limited. The technical content also needs room to grow without making every homepage card excessively long.\n\nThe shared project data model supports continued development by allowing summaries and detailed explanations to be revised through the same content source. This project demonstrates the integration of component-based interface development, application state, routing, and a backend contact workflow. Assessing its effect on visitor engagement or recruiting outcomes would require separate usage evidence.",
      },
    ],
  },
  {
    title: "SSBU Self-Performance Analytics",
    slug: "ssbu-self-performance-analytics",
    date: "August 2026 - September 2026",
    description:
      "Analyzed personal Super Smash Bros. Ultimate match records using descriptive statistics, matchup heatmaps, K-means, XGBoost, and SHAP to examine character performance and explain patterns associated with recorded outcomes.",
    tags: ["Python", "pandas", "scikit-learn", "XGBoost", "SHAP"],
    github:
      "https://github.com/Sase8410/Smash-bros-Self-Performance-Analytics",
    status: "Completed",
    sections: [
      {
        heading: "Project Overview",
        text:
          "This project applies data science to my Super Smash Bros. Ultimate match history to investigate character performance, opponent matchups, and recurring patterns in gameplay. Its purpose is to replace broad impressions about performance with evidence that can be examined at the match, character, and matchup levels. The focus is an individual player's recorded experience, so the resulting findings describe that context rather than a universal ranking of characters.\n\nThe analysis combines complementary methods. Descriptive statistics summarize what occurred, clustering explores similarities among performance profiles, and classification examines relationships between recorded features and outcomes. Model interpretation then helps explain which features contribute to the classifier's decisions. Each method addresses a different question and requires its own limits on interpretation.",
      },
      {
        heading: "Data Preparation",
        text:
          "The dataset records the player character, opponent character, match result, knockouts, falls, self-destructs, damage given, damage taken, and Global Smash Power. These variables capture different aspects of a match: outcomes summarize success, damage measures offensive and defensive activity, and stock-related statistics describe how that activity translated into eliminations.\n\nDerived features make some comparisons more direct. Damage differential is damage given minus damage taken, damage ratio compares those two quantities proportionally, and knockout differential is knockouts minus falls. These features provide context beyond a binary result, but their definitions matter: a damage ratio needs a defined treatment when damage taken is zero. Global Smash Power also requires contextual interpretation because recorded values can differ across characters and points in the player's history.",
      },
      {
        heading: "Exploratory Analysis",
        text:
          "Character-level summaries and matchup heatmaps provide an initial view of how performance varies across the recorded matches. Win rates describe observed outcomes, while damage and knockout summaries help distinguish different ways those outcomes occurred. A strong damage differential, for instance, measures a damage advantage but does not independently establish that the player consistently converted that advantage into wins.\n\nMatch counts are essential to interpreting these comparisons. A high observed win rate based on a few games is less informative than a pattern repeated over a larger sample, and sparse matchup coverage can make heatmaps appear more decisive than the evidence supports. These exploratory views identify questions for further analysis; they do not isolate character effects from opponent skill, practice, or the conditions under which matches were played.",
      },
      {
        heading: "K-Means Clustering",
        text:
          "K-means groups match records or aggregated matchup summaries according to similarity in their numerical features. The method assigns observations to centroids and seeks to reduce the sum of squared distances within groups. It therefore explores recurring performance profiles without requiring win or loss labels to define the grouping.\n\nInterpreting a cluster requires examining its feature values and the observations assigned to it. A cluster number is an arbitrary identifier, and its meaning must come from the associated damage, knockout, or other statistics. Feature scale matters because larger numerical ranges can dominate distance calculations. The unit of analysis also changes the question: clustering individual matches describes game-level patterns, whereas clustering matchup summaries describes similarities among aggregated opponent relationships.",
      },
      {
        heading: "XGBoost and Model Interpretation",
        text:
          "XGBoost classification examines how combinations of recorded features relate to match outcomes. Its boosted decision trees can represent nonlinear relationships and interactions, allowing the model to use several statistics together when forming a prediction. Confusion matrices separate correct and incorrect classifications by outcome, making it possible to inspect error types rather than relying only on a single overall accuracy value.\n\nSHAP explanations attribute contributions to the model's output relative to a reference prediction. They help identify which features move a prediction toward one outcome or the other, but those contributions describe the fitted model rather than a causal mechanism in the game. Feature timing is particularly consequential here: final knockouts, falls, and their differential can directly encode a completed match's result, making classification much easier without establishing an ability to forecast future games.",
      },
      {
        heading: "Limitations and Lessons",
        text:
          "The analysis is limited by its focus on one player, uneven matchup coverage, and factors such as opponent skill and improvement over time. Matches are not automatically interchangeable observations: later games may reflect more practice, and different characters may have been played under different conditions. These factors constrain comparisons even when the descriptive statistics are calculated correctly.\n\nThe project also distinguishes retrospective explanation from pre-match prediction. Final damage and stock statistics are appropriate for describing a completed game, but are unavailable before play. A forecasting study would require features known at the prediction time and an evaluation that respects that timing, such as testing on later matches using information from earlier ones. The main lesson is that model performance becomes meaningful only after the prediction task, available information, and evaluation conditions have been defined.",
      },
    ],
  },
];