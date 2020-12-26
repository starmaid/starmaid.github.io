# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "starmaid.github.io"
    spec.version       = "0.1"
    spec.authors       = ["Nicholas Masso"]
    spec.email         = ["nicholas.masso.14@gmail.com"]
  
    spec.summary       = "Personal website."
    spec.homepage      = "https://github.com/starmaid/starmaid.github.io"
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }
  
    spec.add_runtime_dependency "jekyll", "~> 3.8.7"
    spec.add_runtime_dependency "jekyll-feed", "~> 0.13.0"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6.1"
  end
  