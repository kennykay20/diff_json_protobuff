#!/bin/bash
# set -x
set -eo pipefail
BASEDIR=$(dirname "$0")
#cd "${BASEDIR}" /../

# echo "the script directory $BASEDIR"

proto_js="./generated_js_proto"

# create directory if it does not exist

if [ ! -d proto_js ]; then
    mkdir -p "${proto_js}"
fi;


PROTOC_PATH=./protoc-3.0.2-osx-x86_64/bin/protoc
for f in ./protos/proto/*; do

    # skip the non proto files
    if [ "$(basename "$f")" == "index.js" ]; then
        continue
    fi

    # loop over all the available proto files and compile them into respective directory
    # Javascript code generating
    ${PROTOC_PATH} \
       --js_out=import_style=commonjs,binary:"${proto_js}" \
       --proto_path="./protos/proto" \
       -I "${f}"\
       "${f}"/*.proto
    
done

