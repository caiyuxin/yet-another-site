{-# LANGUAGE OverloadedStrings #-}
module Main where

import Text.Blaze.Svg11
import Text.Blaze.Svg11.Attributes
import Text.Blaze.Svg.Renderer.String ( renderSvg )

header :: Svg -> Svg
header = docTypeSvg ! version "1.1" ! width "160" ! height "160" ! viewbox "0 0 160 160"

contains :: Svg
contains = foldl1 (>>) $ map quad [ ("160", "0",   "0",   "#333333")
                                  , ("160", "0",   "160", "#555555")
                                  , ("160", "160", "0",   "#777777")
                                  , ("160", "160", "160", "#999999") ]

quad :: (AttributeValue, AttributeValue, AttributeValue, AttributeValue) -> Svg
quad (r_, x_, y_, c_) = circle ! r r_ ! cx x_ ! cy y_ ! fill c_ ! opacity "0.4"

favicon :: Svg
favicon = header contains

main :: IO ()
main = do
    let src = renderSvg favicon
    putStrLn src
