let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  packages = [
    jekyll
    bundler
  ];
}