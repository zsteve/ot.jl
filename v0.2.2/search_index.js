var documenterSearchIndex = {"docs":
[{"location":"pot/#Wrapper-functions-for-the-POT-library","page":"POT","title":"Wrapper functions for the POT library","text":"","category":"section"},{"location":"pot/","page":"POT","title":"POT","text":"If you load the PyCall package, you get access to wrappers of functions in the Python Optimal Transport (POT) package. The wrapper functions are available in the submodule POT.","category":"page"},{"location":"pot/#Exact-optimal-transport-(Kantorovich)-problem","page":"POT","title":"Exact optimal transport (Kantorovich) problem","text":"","category":"section"},{"location":"pot/","page":"POT","title":"POT","text":"POT.emd\nPOT.emd2","category":"page"},{"location":"pot/#OptimalTransport.POT.emd","page":"POT","title":"OptimalTransport.POT.emd","text":"emd(mu, nu, C)\n\nCompute transport map for Monge-Kantorovich problem with source and target marginals mu and nu and a cost matrix C of dimensions (length(mu), length(nu)).\n\nReturn optimal transport coupling γ of the same dimensions as C which solves \n\ninf_gamma in Pi(mu nu) langle gamma C rangle\n\nThis function is a wrapper of the function emd in the Python Optimal Transport package.\n\n\n\n\n\n","category":"function"},{"location":"pot/#OptimalTransport.POT.emd2","page":"POT","title":"OptimalTransport.POT.emd2","text":"emd2(mu, nu, C)\n\nCompute exact transport cost for Monge-Kantorovich problem with source and target marginals mu and nu and a cost matrix C of dimensions (length(mu), length(nu)).\n\nReturns optimal transport cost (a scalar), i.e. the optimal value\n\ninf_gamma in Pi(mu nu) langle gamma C rangle\n\nThis function is a wrapper of the function emd2 in the Python Optimal Transport package.\n\n\n\n\n\n","category":"function"},{"location":"pot/#Entropically-regularised-optimal-transport","page":"POT","title":"Entropically regularised optimal transport","text":"","category":"section"},{"location":"pot/","page":"POT","title":"POT","text":"POT.sinkhorn\nPOT.sinkhorn2","category":"page"},{"location":"pot/#OptimalTransport.POT.sinkhorn","page":"POT","title":"OptimalTransport.POT.sinkhorn","text":"sinkhorn(mu, nu, C, eps; tol=1e-9, max_iter = 1000, method = \"sinkhorn\", verbose = false)\n\nCompute optimal transport map of histograms mu and nu with cost matrix C and entropic regularization parameter eps. \n\nMethod can be a choice of \"sinkhorn\", \"greenkhorn\", \"sinkhorn_stabilized\", or \"sinkhorn_epsilon_scaling\" (Flamary et al., 2017).\n\nThis function is a wrapper of the function sinkhorn in the Python Optimal Transport package.\n\n\n\n\n\n","category":"function"},{"location":"pot/#OptimalTransport.POT.sinkhorn2","page":"POT","title":"OptimalTransport.POT.sinkhorn2","text":"sinkhorn2(mu, nu, C, eps; tol=1e-9, max_iter = 1000, method = \"sinkhorn\", verbose = false)\n\nCompute optimal transport cost of histograms mu and nu with cost matrix C and entropic regularization parameter eps.\n\nMethod can be a choice of \"sinkhorn\", \"greenkhorn\", \"sinkhorn_stabilized\", or \"sinkhorn_epsilon_scaling\" (Flamary et al., 2017).\n\nThis function is a wrapper of the function sinkhorn2 in the Python Optimal Transport package.\n\n\n\n\n\n","category":"function"},{"location":"pot/#Unbalanced-optimal-transport","page":"POT","title":"Unbalanced optimal transport","text":"","category":"section"},{"location":"pot/","page":"POT","title":"POT","text":"POT.sinkhorn_unbalanced\nPOT.sinkhorn_unbalanced2","category":"page"},{"location":"pot/#OptimalTransport.POT.sinkhorn_unbalanced","page":"POT","title":"OptimalTransport.POT.sinkhorn_unbalanced","text":"sinkhorn_unbalanced(mu, nu, C, eps, lambda; tol = 1e-9, max_iter = 1000, method = \"sinkhorn\", verbose = false)\n\nCompute optimal transport map of histograms mu and nu with cost matrix C, using entropic regularisation parameter eps and marginal weighting functions lambda.\n\nThis function is a wrapper of the function sinkhorn_unbalanced in the Python Optimal Transport package.\n\n\n\n\n\n","category":"function"},{"location":"pot/#OptimalTransport.POT.sinkhorn_unbalanced2","page":"POT","title":"OptimalTransport.POT.sinkhorn_unbalanced2","text":"sinkhorn_unbalanced2(mu, nu, C, eps, lambda; tol = 1e-9, max_iter = 1000, method = \"sinkhorn\", verbose = false)\n\nCompute optimal transport cost of histograms mu and nu with cost matrix C, using entropic regularisation parameter eps and marginal weighting functions lambda.\n\nThis function is a wrapper of the function sinkhorn_unbalanced2 in the Python Optimal Transport package.\n\n\n\n\n\n","category":"function"},{"location":"#OptimalTransport.jl-Documentation","page":"Home","title":"OptimalTransport.jl Documentation","text":"","category":"section"},{"location":"#Exact-optimal-transport-(Kantorovich)-problem","page":"Home","title":"Exact optimal transport (Kantorovich) problem","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"emd\nemd2","category":"page"},{"location":"#OptimalTransport.emd","page":"Home","title":"OptimalTransport.emd","text":"emd(μ, ν, C, optimizer)\n\nCompute the optimal transport map γ for the Monge-Kantorovich problem with source histogram μ, target histogram ν, and cost matrix C of size (length(μ), length(ν)) which solves\n\ninf_γ  Π(μ ν) langle γ C rangle\n\nThe corresponding linear programming problem is solved with the user-provided optimizer. Possible choices are Tulip.Optimizer() and Clp.Optimizer() in the Tulip and Clp packages, respectively.\n\n\n\n\n\n","category":"function"},{"location":"#OptimalTransport.emd2","page":"Home","title":"OptimalTransport.emd2","text":"emd2(μ, ν, C, optimizer; map=nothing)\n\nCompute the optimal transport cost (a scalar) for the Monge-Kantorovich problem with source histogram μ, target histogram ν, and cost matrix C of size (length(μ), length(ν)) which is given by\n\ninf_γ  Π(μ ν) langle γ C rangle\n\nThe corresponding linear programming problem is solved with the user-provided optimizer. Possible choices are Tulip.Optimizer() and Clp.Optimizer() in the Tulip and Clp packages, respectively.\n\nA pre-computed optimal transport map may be provided.\n\n\n\n\n\n","category":"function"},{"location":"#Entropically-regularised-optimal-transport","page":"Home","title":"Entropically regularised optimal transport","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"sinkhorn\nsinkhorn2\nsinkhorn_stabilized_epsscaling\nsinkhorn_stabilized\nsinkhorn_barycenter","category":"page"},{"location":"#OptimalTransport.sinkhorn","page":"Home","title":"OptimalTransport.sinkhorn","text":"sinkhorn(mu, nu, C, eps; tol=1e-9, check_marginal_step=10, maxiter=1000)\n\nCompute entropically regularised transport map of histograms mu and nu with cost matrix C and entropic regularization parameter eps. \n\nReturn optimal transport coupling γ of the same dimensions as C which solves \n\ninf_gamma in Pi(mu nu) langle gamma C rangle - epsilon H(gamma)\n\nwhere H is the entropic regulariser, H(gamma) = -sum_i j gamma_ij log(gamma_ij).\n\n\n\n\n\n","category":"function"},{"location":"#OptimalTransport.sinkhorn2","page":"Home","title":"OptimalTransport.sinkhorn2","text":"sinkhorn2(mu, nu, C, eps; tol=1e-9, check_marginal_step=10, maxiter=1000)\n\nCompute entropically regularised transport cost of histograms mu and nu with cost matrix C and entropic regularization parameter eps.\n\nReturn optimal value of\n\ninf_gamma in Pi(mu nu) langle gamma C rangle - epsilon H(gamma)\n\nwhere H is the entropic regulariser, H(gamma) = -sum_i j gamma_ij log(gamma_ij).\n\nA pre-computed optimal transport map may be provided.\n\n\n\n\n\n","category":"function"},{"location":"#OptimalTransport.sinkhorn_stabilized_epsscaling","page":"Home","title":"OptimalTransport.sinkhorn_stabilized_epsscaling","text":"sinkhorn_stabilized_epsscaling(mu, nu, C, eps; absorb_tol = 1e3, max_iter = 1000, tol = 1e-9, lambda = 0.5, k = 5, verbose = false)\n\nCompute optimal transport map of histograms mu and nu with cost matrix C and entropic regularisation parameter eps.  Uses stabilized Sinkhorn algorithm with epsilon-scaling (Schmitzer et al., 2019). \n\nk epsilon-scaling steps are used with scaling factor lambda, i.e. sequentially solve Sinkhorn with regularisation parameters  [lambda^(1-k), ..., lambda^(-1), 1]*eps. \n\n\n\n\n\n","category":"function"},{"location":"#OptimalTransport.sinkhorn_stabilized","page":"Home","title":"OptimalTransport.sinkhorn_stabilized","text":"sinkhorn_stabilized(mu, nu, C, eps; absorb_tol = 1e3, max_iter = 1000, tol = 1e-9, alpha = nothing, beta = nothing, return_duals = false, verbose = false)\n\nCompute optimal transport map of histograms mu and nu with cost matrix C and entropic regularisation parameter eps.  Uses stabilized Sinkhorn algorithm (Schmitzer et al., 2019).\n\n\n\n\n\n","category":"function"},{"location":"#OptimalTransport.sinkhorn_barycenter","page":"Home","title":"OptimalTransport.sinkhorn_barycenter","text":"sinkhorn_barycenter(mu_all, C_all, eps, lambda_all; tol = 1e-9, check_marginal_step = 10, max_iter = 1000)\n\nCompute the entropically regularised (i.e. Sinkhorn) barycenter for a collection of N histograms mu_all with respective cost matrices C_all, relative weights lambda_all, and entropic regularisation parameter eps. \n\nmu_all is taken to contain N histograms mu_all[i, :] for math i = 1, \\ldots, N.\nC_all is taken to be a list of N cost matrices corresponding to the mu_all[i, :].\neps is the scalar regularisation parameter.\nlambda_all are positive weights.\n\nReturns the entropically regularised barycenter of the mu_all, i.e. the distribution that minimises\n\nmin_mu in Sigma sum_i = 1^N lambda_i mathrmentropicOT^epsilon_C_i(mu mu_i)\n\nwhere mathrmentropicOT^epsilon_C denotes the entropic optimal transport cost with cost C and entropic regularisation level epsilon.\n\n\n\n\n\n","category":"function"},{"location":"#Unbalanced-optimal-transport","page":"Home","title":"Unbalanced optimal transport","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"sinkhorn_unbalanced\nsinkhorn_unbalanced2","category":"page"},{"location":"#OptimalTransport.sinkhorn_unbalanced","page":"Home","title":"OptimalTransport.sinkhorn_unbalanced","text":"sinkhorn_unbalanced(mu, nu, C, lambda1, lambda2, eps; tol = 1e-9, max_iter = 1000, verbose = false, proxdiv_F1 = nothing, proxdiv_F2 = nothing)\n\nComputes the optimal transport map of histograms mu and nu with cost matrix C and entropic regularization parameter eps,  using the unbalanced Sinkhorn algorithm [Chizat 2016] with KL-divergence terms for soft marginal constraints, with weights (lambda1, lambda2) for the marginals mu, nu respectively.\n\nFor full generality, the user can specify the soft marginal constraints (F_1(cdot  mu) F_2(cdot  nu)) to the problem\n\nmin_gamma epsilon mathrmKL(gamma  exp(-Cepsilon)) + F_1(gamma_1  mu) + F_2(gamma_2  nu)\n\nvia math\\mathrm{proxdiv}_{F_1}(s, p) and math\\mathrm{proxdiv}_{F_2}(s, p) (see Chizat et al., 2016 for details on this). If specified, the algorithm will use the user-specified F1, F2 rather than the default (a KL-divergence).\n\n\n\n\n\n","category":"function"},{"location":"#OptimalTransport.sinkhorn_unbalanced2","page":"Home","title":"OptimalTransport.sinkhorn_unbalanced2","text":"sinkhorn_unbalanced2(mu, nu, C, lambda1, lambda2, eps; tol = 1e-9, max_iter = 1000, verbose = false, proxdiv_F1 = nothing, proxdiv_F2 = nothing)\n\nComputes the optimal transport cost of histograms mu and nu with cost matrix C and entropic regularization parameter eps,  using the unbalanced Sinkhorn algorithm [Chizat 2016] with KL-divergence terms for soft marginal constraints, with weights (lambda1, lambda2) for the marginals mu, nu respectively.\n\nSee documentation for sinkhorn_unbalanced for additional details.\n\nA pre-computed optimal transport map may be provided.\n\n\n\n\n\n","category":"function"},{"location":"#Quadratically-regularised-optimal-transport","page":"Home","title":"Quadratically regularised optimal transport","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"quadreg","category":"page"},{"location":"#OptimalTransport.quadreg","page":"Home","title":"OptimalTransport.quadreg","text":"quadreg(mu, nu, C, ϵ; θ = 0.1, tol = 1e-5,maxiter = 50,κ = 0.5,δ = 1e-5)\n\nComputes the optimal transport map of histograms mu and nu with cost matrix C and quadratic regularization parameter ϵ,  using the semismooth Newton algorithm [Lorenz 2016].\n\nThis implementation makes use of IterativeSolvers.jl and SparseArrays.jl.\n\nParameters:\n\nθ: starting Armijo parameter.\n\ntol: tolerance of marginal error.\n\nmaxiter: maximum interation number.\n\nκ: control parameter of Armijo.\n\nδ: small constant for the numerical stability of conjugate gradient iterative solver.\n\nTips: If the algorithm does not converge, try some different values of θ.\n\nReference: Lorenz, D.A., Manns, P. and Meyer, C., 2019. Quadratically regularized optimal transport. arXiv preprint arXiv:1903.01112v4.\n\n\n\n\n\n","category":"function"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"EditURL = \"https://github.com/zsteve/OptimalTransport.jl/blob/master/examples/basic/script.jl\"","category":"page"},{"location":"examples/basic/#Basics","page":"Basics","title":"Basics","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"(Image: )","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"You are viewing the HTML output generated by Documenter.jl and Literate.jl from the Julia source file. The corresponding notebook can be viewed in nbviewer.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"import Pkg\nPkg.activate(\"/home/runner/work/OptimalTransport.jl/OptimalTransport.jl/docs/../examples/basic\")\nPkg.instantiate()","category":"page"},{"location":"examples/basic/#Packages","page":"Basics","title":"Packages","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We load the following packages into our environment:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"using OptimalTransport\nusing Distances\nusing Plots\nusing PyCall\nusing Tulip\n\nusing LinearAlgebra\nusing Random\n\nRandom.seed!(1234);\nnothing #hide","category":"page"},{"location":"examples/basic/#Problem-setup","page":"Basics","title":"Problem setup","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"First, let us initialise two random probability measures mu (source measure) and nu (target measure) in 1D:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"M = 200\nμ = fill(1/M, M)\nμsupport = rand(M)\n\nN = 250\nν = fill(1/N, N)\nνsupport = rand(N);\nnothing #hide","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"Now we compute the quadratic cost matrix C_ij =  x_i - x_j _2^2:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"C = pairwise(SqEuclidean(), μsupport', νsupport');\nnothing #hide","category":"page"},{"location":"examples/basic/#Exact-optimal-transport","page":"Basics","title":"Exact optimal transport","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"The earth mover's distance is defined as the optimal value of the Monge-Kantorovich problem","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"inf_gamma in Pi(mu nu) langle gamma C rangle =\ninf_gamma in Pi(mu nu) sum_i j gamma_ij C_ij","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"where Pi(mu nu) denotes the set of couplings of mu and nu, i.e., the set of joint distributions whose marginals are mu and nu. If C is the quadratic cost matrix, the earth mover's distance is known as the square of the 2-Wasserstein distance.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"The function emd returns the optimal transport plan gamma","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"γ = emd(μ, ν, C, Tulip.Optimizer());\nnothing #hide","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"whilst using emd2 returns the optimal transport cost:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"emd2(μ, ν, C, Tulip.Optimizer())","category":"page"},{"location":"examples/basic/#Entropically-regularised-optimal-transport","page":"Basics","title":"Entropically regularised optimal transport","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We may add an entropy term to the Monge-Kantorovich problem to obtain the entropically regularised optimal transport problem","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"inf_gamma in Pi(mu nu) langle gamma C rangle + epsilon Omega(gamma)","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"where Omega(gamma) = sum_i j gamma_ij log(gamma_ij) is the negative entropy of the coupling gamma and epsilon controls the strength of the regularisation.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"This problem is strictly convex and admits a very efficient iterative scaling scheme for its solution known as the Sinkhorn algorithm.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We compute the optimal entropically regularised transport plan:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"ε = 0.01\nγ = sinkhorn(μ, ν, C, ε);\nnothing #hide","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We can check that one obtains the same result with the Python Optimal Transport (POT) package:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"γpot = POT.sinkhorn(μ, ν, C, ε)\nnorm(γ - γpot, Inf)","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We can compute the optimal cost (a scalar) of the entropically regularized optimal transport problem with sinkhorn2:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"sinkhorn2(μ, ν, C, ε)","category":"page"},{"location":"examples/basic/#Quadratically-regularised-optimal-transport","page":"Basics","title":"Quadratically regularised optimal transport","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"Instead of the common entropically regularised optimal transport problem, we can solve the quadratically regularised optimal transport problem","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"inf_gamma in Pi(mu nu) langle gamma C rangle + epsilon frac gamma _F^22","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"One property of the quadratically regularised optimal transport problem is that the resulting transport plan gamma is sparse. We take advantage of this and represent it as a sparse matrix.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"quadreg(μ, ν, C, ε; maxiter=500);\nnothing #hide","category":"page"},{"location":"examples/basic/#Stabilized-Sinkhorn-algorithm","page":"Basics","title":"Stabilized Sinkhorn algorithm","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"When epsilon is very small, we can use a log-stabilised version of the Sinkhorn algorithm.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"ε = 0.005\nγ = sinkhorn_stabilized(μ, ν, C, ε; max_iter=5000);\nnothing #hide","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"Again we can check that the same result is obtained with the POT package:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"γ_pot = POT.sinkhorn(μ, ν, C, ε; method=\"sinkhorn_stabilized\", max_iter=5_000)\nnorm(γ - γ_pot, Inf)","category":"page"},{"location":"examples/basic/#Stabilized-Sinkhorn-algorithm-with-\\epsilon-scaling","page":"Basics","title":"Stabilized Sinkhorn algorithm with epsilon-scaling","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"In addition to log-stabilisation, we can use epsilon-scaling:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"γ = sinkhorn_stabilized_epsscaling(μ, ν, C, ε; max_iter=5_000);\nnothing #hide","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"The POT package yields the same result:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"γpot = POT.sinkhorn(μ, ν, C, ε; method=\"sinkhorn_epsilon_scaling\", max_iter=5000)\nnorm(γ - γpot, Inf)","category":"page"},{"location":"examples/basic/#Unbalanced-optimal-transport","page":"Basics","title":"Unbalanced optimal transport","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"Unbalanced optimal transport deals with general positive measures which do not necessarily have the same total mass. For unbalanced source and target marginals mu and nu and a cost matrix C, entropically regularised unbalanced optimal transport solves","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"inf_gamma geq 0 langle gamma C rangle + epsilon Omega(gamma) + lambda_1 mathrmKL(gamma 1  mu) + lambda_2 mathrmKL(gamma^mathsfT 1  nu)","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"where epsilon controls the strength of the entropic regularisation, and lambda_1 and lambda_2 control how strongly we enforce the marginal constraints.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We construct two random measures, now with different total masses:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"M = 100\nμ = fill(1/M, M)\nμsupport = rand(M)\n\nN = 200\nν = fill(1/M, N)\nνsupport = rand(N);\nnothing #hide","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We compute the quadratic cost matrix:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"C = pairwise(SqEuclidean(), μsupport', νsupport');\nnothing #hide","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"Now we solve the corresponding unbalanced, entropy-regularised transport problem with epsilon = 001 and lambda_1 = lambda_2 = 1:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"ε = 0.01\nλ = 1\nγ = sinkhorn_unbalanced(μ, ν, C, λ, λ, ε);\nnothing #hide","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We check that the result agrees with POT:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"γpot = POT.sinkhorn_unbalanced(μ, ν, C, ε, λ)\nnorm(γ - γpot, Inf)","category":"page"},{"location":"examples/basic/#Plots","page":"Basics","title":"Plots","text":"","category":"section"},{"location":"examples/basic/#Entropically-regularised-transport","page":"Basics","title":"Entropically regularised transport","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"Let us construct source and target measures again:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"μsupport = νsupport = range(-2, 2; length=100)\nC = pairwise(SqEuclidean(), μsupport', νsupport')\nμ = exp.(- μsupport.^2 ./ 0.5^2)\nμ ./= sum(μ)\nν = νsupport.^2 .* exp.(- νsupport.^2 ./ 0.5^2)\nν ./= sum(ν)\n\nplot(μsupport, μ; label=raw\"$\\mu$\", size=(600, 400))\nplot!(νsupport, ν; label=raw\"$\\nu$\")","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"Now we compute the entropically regularised transport plan:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"γ = sinkhorn(μ, ν, C, 0.01)\nheatmap(\n    μsupport, νsupport, γ;\n    title=\"Entropically regularised optimal transport\", size=(600, 600)\n)","category":"page"},{"location":"examples/basic/#Quadratically-regularised-transport","page":"Basics","title":"Quadratically regularised transport","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"Notice how the \"edges\" of the transport plan are sharper if we use quadratic regularisation instead of entropic regularisation:","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"γquad = Matrix(quadreg(μ, ν, C, 5; maxiter=500))\nheatmap(\n    μsupport, νsupport, γquad;\n    title=\"Quadratically regularised optimal transport\", size=(600, 600)\n)","category":"page"},{"location":"examples/basic/#Sinkhorn-barycenters","page":"Basics","title":"Sinkhorn barycenters","text":"","category":"section"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"For a collection of discrete probability measures mu_i_i=1^N subset mathcalP, cost matrices C_i_i=1^N, and positive weights lambda_i_i=1^N summing to 1, the entropically regularised barycenter in mathcalP is the discrete probability measure mu that solves","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"inf_mu in mathcalP sum_i = 1^N lambda_i mathrmentropicOT^epsilon_C_i(mu mu_i)","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"where mathrmentropicOT^epsilon_C_i(mu mu_i) denotes the entropically regularised optimal transport cost with marginals mu and mu_i, cost matrix C_i, and entropic regularisation parameter epsilon.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"We set up two measures and compute the weighted barycenters. We choose weights lambda_1 in 025 05 075.","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"support = range(-1, 1; length=250)\nmu1 = exp.(- (support .+ 0.5).^2 ./ 0.1^2)\nmu1 ./= sum(mu1)\nmu2 = exp.(- (support .- 0.5).^2 ./ 0.1^2)\nmu2 ./= sum(mu2)\n\nplt = plot(; size=(800, 400), legend=:outertopright)\nplot!(plt, support, mu1; label=raw\"$\\mu_1$\")\nplot!(plt, support, mu2; label=raw\"$\\mu_2$\")\n\nmu = hcat(mu1, mu2)'\nC1 = C2 = pairwise(SqEuclidean(), support')\nC = [C1, C2]\nfor λ1 in (0.25, 0.5, 0.75)\n    λ2 = 1 - λ1\n    a = sinkhorn_barycenter(mu, C, 0.01, [λ1, λ2]; max_iter=1000)\n    plot!(plt, support, a; label=\"\\$\\\\mu \\\\quad (\\\\lambda_1 = $λ1)\\$\")\nend\nplt","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"","category":"page"},{"location":"examples/basic/","page":"Basics","title":"Basics","text":"This page was generated using Literate.jl.","category":"page"}]
}