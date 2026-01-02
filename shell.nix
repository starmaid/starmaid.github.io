let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  packages = with pkgs; [
    ruby.devEnv
    exiftool
    ffmpeg_6  
  ];
  shellHook = ''
    export GEM_HOME=$PWD/vendor/bundle
    export GEM_PATH=$GEM_HOME
    export BUNDLE_PATH=$GEM_HOME
    export PATH=$GEM_HOME/bin:$PATH
  '';
}