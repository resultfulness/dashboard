#!/usr/bin/env bash

function kebab-to-pascal () {
    sed -E 's/-(.)/\U\1/g' <<< "$1" | sed -E 's/^(.)/\U\1/'
}

FILES="$*"

if [ -z "$FILES" ]; then
    exit 1;
fi

for f in $FILES; do
    filename="$(basename "${f%.tsx}")"
    component="$(kebab-to-pascal "$filename")"
    cat << eof > "$f"
export default function $component() {
    return <div>$component</div>;
}
eof
done
